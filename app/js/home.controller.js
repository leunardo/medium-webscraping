app.controller('homeController', homeController);

function homeController($scope, wcService) {
    wcService.show('/trends/general').then(data => {
        $scope.wc = data;
        $scope.$apply();
    });
}