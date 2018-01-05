app.factory('wcService', wcService);

function wcService(dbService) {

    const dimensoes = () => ({
        width:  window.innerWidth  - (window.innerWidth  * .3),
        height: window.innerHeight - (window.innerHeight * .4)
    });

    function getWc(snapshot) {
        const data = snapshot.val();
        data.forEach(d => d.size *= 4);

        return {
            'words': data,
            'height': dimensoes().height,
            'width': dimensoes().width,
            'useTransition': true,
            'rotate': 45,
        };
    }

    return {    
        show: async (document) => {
            let dados = await dbService.getDataFrom(document);
            return getWc(dados);
        }
    }
}   
