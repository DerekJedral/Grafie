/**
 * Created by Evan on 2017-01-24.
 */
angular.module('grafie.profile', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
        console.log('loaded');
        $stateProvider
            .state('grafie.profile', {
                url: '/profile',
                views: {
                    "content@vemu": {
                        templateUrl: '/component/profile/profile.tpl.html'
                    }
                }
            });

    });