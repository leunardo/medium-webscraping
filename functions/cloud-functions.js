const helpers = require('./helpers');

/**
 * Processa os dados das trends e salva num documento chamado 'general',
 * que possui todas as frequencias das palavras.
 * 
 * @param {Event<DeltaSnapshot>} event Evento de escrita no banco de dados
 */
function processarTrendsGerais(event) {
    const original = event.data.val();
    const palavras = helpers.converterParaArrayDePalavras(original);
    const countPalavras = helpers.contarPalavras(palavras);
    const palavrasEmAlta = helpers.trending(countPalavras);
    
    return event.data.ref.parent.child('trends/general').set(palavrasEmAlta);
}

/**
 * Processa os dados das trends e salva as frequencias das palavras
 * em um documento chamado 'trends/perTopic', mantendo a ordem original dos topicos.
 * 
 * @param {Event<DeltaSnapshot>} event Evento de escrita no banco de dados
 */
function processarTopicosEspecificos(event) {
    const original = event.data.val();
    const palavrasPorTopicos = helpers.converterParaArrayDePalavras(original, true);
    let topicos = {};

    for (let key in palavrasPorTopicos) {
        let countPalavras = helpers.contarPalavras(palavrasPorTopicos[key]);
        let palavrasEmAltaTopico = helpers.trending(countPalavras, true);
        topicos[key] = palavrasEmAltaTopico;
    }

    return event.data.ref.parent.child('trends/perTopic').set(topicos);
}

module.exports = {
    processarTopicosEspecificos: processarTopicosEspecificos,
    processarTrendsGerais: processarTrendsGerais
}