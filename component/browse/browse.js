/**
 * Created by ekim412 on 2017-02-04.
 */
angular.module('grafie.browse', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('grafie.browse', {
                url: '/browse',
                views: {
                    "content@grafie": {
                        templateUrl: function (params) {
                            return 'component/browse/views/browse.html';

                            //if (params.type === "browse") {
                            //    return 'component/browse/views/browse.html';
                            //}else {
                            //    return 'component/home/views/home-general.html';
                            //}
                        },

                        controller: 'browseController'
                    }
                }
            });

    });