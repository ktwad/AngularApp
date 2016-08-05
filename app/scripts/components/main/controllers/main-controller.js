'use strict';

angular.module('myAppMain')
.controller('MainCtrl', function ($scope) {

        $scope.todoList = ['Clean', 'Bake'];

        $scope.addTodo = function (item) {
            $scope.todoList.push(item);
        };


        $scope.removeTodo = function (item) {
            var index;
            if (typeof item === 'string') {
                index = $scope.todoList.indexOf(item);
            } else if (typeof item === 'number') {
                index = item;
            } else {
                return null;
            }
            if (index > -1) {
                $scope.todoList.splice(index, 1);
            }
        };

        /*

        $scope.name = 'Success!';
        $scope.alert = function () {
            alert('Hello');
        }

        Math.random();

        $scope.random = function () {

            var array = [
                'apples',
                'pears',
                'oranges',
                'peaches',
                'pugs',
                'carrots',
                'chocolate'
            ];

            var index = Math.floor(Math.random() * 7);

            return array[index];
        }; */
    });