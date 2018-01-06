app.controller('topicController', topicController);

function topicController ($scope, $routeParams, wcService) {
    wcService
        .show(`/trends/perTopic/${ $routeParams.topic }`, false)
        .then(data => {
            $scope.wc = data;
            $scope.$apply();
        });
}