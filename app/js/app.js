const app = angular.module('app', ['ngRoute', 'angular-d3-word-cloud']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'homeController',
            templateUrl: 'templates/home.html'
        }); 
});
