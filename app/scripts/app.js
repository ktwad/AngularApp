'use strict';

/**
 * @ngdoc overview
 * @name myApp
 *
 * Main module of the application.
 */
angular.module('myApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',


    //Source modules
    'myAppHeader',
    'myAppMain',
    'myAppFooter',
    'myAppAbout',
    'myAppContact',
    'myAppShopping',
    'myAppShoppingCustom',
    'myAppCarousel'

])

.directive('app', function() {
        return {
            templateUrl: 'scripts/app.html'
        };
    });