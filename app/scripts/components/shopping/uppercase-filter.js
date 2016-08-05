angular.module('myAppShopping')
  .filter('MakeUppercase', function () {
    return function (item) {
      return item.toUpperCase();
    };
  });
