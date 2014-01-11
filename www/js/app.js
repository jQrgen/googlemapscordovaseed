angular.module('myApp', ['ngRoute', 'myApp.services', 'myApp.controllers', 'googlemapsdirective'])
    .config(function ($routeProvider) {
        $routeProvider
        .when('/', {
            controller: 'MainCtrl',
            templateUrl: 'partials/main.html'
        })
        .when('/view', {
            controller: 'ViewCtrl',
            templateUrl: 'partials/view.html'
        })
        .otherwise({redirectTo: '/'});
    });
