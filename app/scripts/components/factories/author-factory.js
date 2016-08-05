'use strict';

/**
 * @ngdoc function
 * @name myAppContact.factor:User
 * @description
 * # Factory for User
 */

angular.module('myAppContact')
    .factory('Author', function () {
        var Author = {};

        Author.name = '';
        Author.email = '';
        Author.phone = '';
        Author.age = 12;

        Author.init = function (data) {
            Author.setName(data.name);
            Author.setEmail(data.email);
            Author.setPhone(data.phone);
        };

        Author.increaseAge = function () {
          Author.age++;
        };

        Author.decreaseAge = function () {
            Author.age--;
        };

        //Getters and Setters
        Author.getName = function () {
            return Author.name;
        };
        Author.setName = function (name) {
          Author.name = name;
        };
        Author.getEmail = function () {
            return Author.email;
        };
        Author.setEmail = function (email) {
            Author.email = email;
        };
        Author.getPhone = function () {
            return Author.phone;
        };
        Author.setPhone = function (phone) {
            Author.phone = phone;
        };
        Author.getAge = function (age) {
            return Author.age;
        };

        return Author;
    });