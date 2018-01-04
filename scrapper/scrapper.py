# coding: utf-8
"""Aqui ha toda a logica de pesquisar os dados na pagina e coleta-los."""
import time
import json

from os import environ
from selenium import webdriver
from selenium.webdriver.common.keys import Keys


def inicializa_browser(url):
    """Inicializa browser com preferencias definidas e abre um url.

        Retorna o objeto webdriver.
    """
    options = webdriver.ChromeOptions()
    options.add_argument('--disable-gpu')
    options.add_argument('--no-sandbox')
    options.add_argument('--headless')

    browser = webdriver.Chrome(chrome_options=options)
    browser.get(url)

    return browser


def pegar_texto_pagina_dinamica(url, tag, n_scroll=30):
    """Copia o texto de uma tag em uma pagina que carrega o conteudo dinamicamente, apos forçar o scroll"""

    browser = inicializa_browser(url)
    print("Acessando: %s, aguarde..." % url)
    body = browser.find_element_by_tag_name("body")

    for _ in range(n_scroll):
        body.send_keys(Keys.PAGE_DOWN)
        time.sleep(.1)

    tag_titulos = browser.find_elements_by_tag_name(tag)

    titulos = []
    for titulo in tag_titulos:
        titulos.append(titulo.text)


    browser.quit()
    return json.dumps(titulos, ensure_ascii=False)


def pegar_urls_elem_pagina(url, seletor):
    """Copia os links de elementos em uma pagina."""

    browser = inicializa_browser(url)

    tag_urls = browser.find_elements_by_css_selector(seletor)

    urls = []
    for url in tag_urls:
        urls.append(url.get_attribute('href'))

    browser.quit()

    return urls
