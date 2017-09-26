angular
    .module('app', [
        'ui.router', 'ui.calendar'
    ])
    .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('date', {
                url: '/:id',
                templateUrl: 'templates/main.html',
                controller: 'mainController',
                controllerAs: 'mainCtrl'       
            })
           
            
            
    }])
    