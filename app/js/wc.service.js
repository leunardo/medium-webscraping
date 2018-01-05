app.factory('wcService', wcService);

function wcService(dbService) {

    const dimensoes = () => ({
        width:  window.innerWidth  - (window.innerWidth  * .4),
        height: window.innerHeight - (window.innerHeight * .4)
    });

    function getWc(snapshot, callback) {
        const data = snapshot.val();
        data.forEach(d => d.size *= 4);

        callback({
            'words': data,
            'height': dimensoes().height,
            'width': dimensoes().width,
            'useTransition': true,
            'rotate': 45,
        })
    }

    return {    
        show: (document, callback) => 
            dbService.getDataFrom(document, snapshot => 
                                    getWc(snapshot, callback)),
    }
}   
