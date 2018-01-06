app.factory('wcService', wcService);

function wcService(dbService) {

    const dimensoes = () => ({
        width:  window.innerWidth  - (window.innerWidth  * .3),
        height: window.innerHeight - (window.innerHeight * .4)
    });

    function productFactor(isGeneral) {
        const dim = dimensoes();
        const bias = isGeneral ? .7 : 1.1;
        const higherViewPort = Math.max(dim.height, dim.width);
        return .015 * higherViewPort * bias;
    }

    function getWc(snapshot, isGeneral) {
        const data = snapshot.val();

        data.forEach(d => d.size *= productFactor(isGeneral));

        return {
            'words': data,
            'height': dimensoes().height,
            'width': dimensoes().width,
            'useTransition': true,
            'rotate': 45,
        };
    }

    return {    
        show: async (document, isGeneral) => {
            let dados = await dbService.getDataFrom(document);
            return getWc(dados, isGeneral);
        }
    }
}   
