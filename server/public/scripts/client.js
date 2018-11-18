var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngMessages'])
    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('lime')
            .warnPalette('red')
            .accentPalette('blue')
            .backgroundPalette('grey')
            .dark();
    });

// Defining routes to URLs
myApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/views/home.html',
        controller: 'MessageController as mc'
    }).otherwise({
        template: '<h1>404</h1>'
    });
});
