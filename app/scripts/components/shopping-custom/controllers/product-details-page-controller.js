angular.module('myAppShoppingCustom')
.controller('PDPCustomCtrl', function ($scope, $state, $stateParams, ShoppingCartCustomService) {
        $scope.params = $stateParams.obj;

        var self = this;
        this.init = function () {
            if (!$scope.params) {
                $scope.back();
            }
            ShoppingCartCustomService.getAccessories().then(function (response) {
                $scope.accessories = response.data[$scope.params.group];
            });
        };

        $scope.back =function () {
            $state.go('shop-custom.plp');
        };

        this.init();

    });