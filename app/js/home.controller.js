app.controller('homeController', homeController);

function homeController($scope) {
    $scope.oi = 'Oi tudo bom?';

    if (WordCloud.isSupported){

            WordCloud(document.getElementById('my_canvas'), { 'list': [['foo', 7], ['bar', 6], ['nada a ver', 3], ['oi', 1]], 'minSize': 2, 'weightFactor': 3});
    }
}