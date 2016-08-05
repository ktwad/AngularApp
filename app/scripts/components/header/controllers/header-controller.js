'use strict';

angular.module('myAppHeader')
.controller('HeaderCtrl', function ($scope, $location) {
       $scope.routes = [
           {
               name: 'Main',
               sref: 'main',
               url: '/main'
           },
           {
               name: 'About',
               sref: 'about', //state ref,  part of ui router
               url: '/about'
           },
           {
               name: 'Contact',
               sref: 'contact',
               url: '/contact'
           },
           {
               name: 'Shop',
               sref: 'shop.plp',
               url: '/shop/product-landing-page'
           },
           {
               name: 'Custom Shopping',
               sref: 'shop-custom.plp',
               url: '/shop-custom/product-landing-page'
           },
           {
               name: 'Carousel',
               sref: 'carousel',
               url: '/carousel'
           }
       ];

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    });