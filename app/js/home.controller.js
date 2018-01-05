app.controller('homeController', homeController);

function homeController($scope) {
    const alturaWc = window.innerHeight - (window.innerHeight * .4);
    const larguraWc = window.innerWidth - (window.innerWidth * .3);
    $scope.oi = 'Oi tudo bom?';

    const firebase = document.getFirebaseApp();
    const db = firebase.database();
    db.ref('/trends/general').once('value').then(snapshot => {
        const data = snapshot.val();
        data.forEach(d => d.size *= 4);

        $scope.wc = {
            'words': data,
            'height': alturaWc,
            'width': larguraWc,
            'useTransition': true,
            'rotate': 45
        };
        $scope.$apply();
    });

}