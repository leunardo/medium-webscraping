"""Modulo que coleta os dados e os envia para o modulo de conexao com o firebase."""
import firebase_entry as fb
import json

from scrapper import pegar_texto_pagina_dinamica

topics = ["technology", "culture", "entrepreneurship",
          "creativity", "self", "politics", "media",
          "productivity", "digital-design", "popular"]

data = { }

for topic in topics:
    url = 'https://medium.com/topic/%s' % topic
    words = pegar_texto_pagina_dinamica(url, 'h3')
    data[topic] = words

fb.salvar_topicos(data)
