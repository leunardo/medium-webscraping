/**
 * Seleciona as palavras com mais frequencia.
 * @param {Object} countPalavras um objeto <palavra:quantidade>
 * @param {boolean} porTopico define o valor do limite, geral tem o limite maior.
 */
function trending(countPalavras, porTopico=false) {
    const palavrasValidas = {};
    const limite = porTopico ? 10 : 20; // caso a palavra seja muito frequente, quase certeza de ela ser um outlier
    
    for (let i in countPalavras) {
        if (countPalavras[i] === 1 || countPalavras[i] >= limite) continue;
        palavrasValidas[i] = countPalavras[i];
    }
    return Object.keys(palavrasValidas).map((key) => [key, palavrasValidas[key]]);
}

/**
 * Retorna um objeto com as palavras e o numero de ocorrencias delas.  
 * @param {Object} palavras
 * @returns {Object} Objeto <palavra:numero_ocorrencia>
 */
function contarPalavras(palavras) {
    return palavras.reduce((obj, chave) => { 
        if (chave != '') obj[chave] = (obj[chave] || 0) + 1; 
        return obj; 
    }, { });
}

/**
 * Converte um objeto <topico: palavras> para um array de palavras.
 * @param {Object} objeto várias propriedades compostas de <topico:palavras>
 * @param {boolean} separarPorTopico se verdadeiro mantem as palavras separadas por tópico,
 * caso contrário combina todos os topicos.
 */
function converterParaArrayDePalavras(objeto, separarPorTopico=false) {
    let palavras;

    if (separarPorTopico) palavras = {}; else palavras = [];

    for (let key in objeto) {
        let palavrasObjeto = objeto[key]
                                    .replace(/[^a-z\s]/gi, "") // remove qualquer caractere que nao seja letra ou espaço
                                    .toLowerCase()
                                    .split(/\s+/);             // separa as palavras por intervalos de espaco

        if (separarPorTopico)
            palavras[key] = palavrasObjeto;
        else
            palavras = palavras.concat(palavrasObjeto);
    }

    return palavras;
}

module.exports = {
    trending: trending,
    contarPalavras: contarPalavras,
    converterParaArrayDePalavras: converterParaArrayDePalavras,
}
