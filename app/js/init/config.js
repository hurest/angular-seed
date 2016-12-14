var seedApp = angular.module('seedApp', [
        'ngMaterial',
        'angularMoment',
        'ui.router'
    ]);

seedApp.config(function($urlRouterProvider, $httpProvider, $stateProvider) {

    $httpProvider.interceptors.push('httpInterceptor');

    $stateProvider
        .state('view1', {
            url: "/view1",
            templateUrl: '/app/templates/pages/view1/html/view1.html',
            controller: 'view1Controller'
        })
        .state('view2', {
            url: "/view2",
            templateUrl: '/app/templates/pages/view2/html/view2.html',
            controller: 'view2Controller'
        });

    $urlRouterProvider.otherwise("/view1");

});