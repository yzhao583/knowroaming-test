'use strict';

angular.module('KrChessApp')

    // TODO: add implementation.
    .controller('MainController', ['$scope', 'Api',
        function($scope, Api) {

            /******************
             * Public Functions
             ******************/
            $scope.getDim = function() {
                Api.getDimensions().then(
                        function successCallback(response) {
                            $scope.dim = response.data;
                        },
                        function errorCallback(response) {
                            console.log("Error when retrieve data from server");
                        });
                console.log($scope.dim);

            }


            $scope.getNumber = function(num) {
                return new Array(num);
            }

            $scope.Selected = null;
            $scope.setSelected = function(indexString) {
                $scope.Selected = indexString;
                console.log(indexString);
            }


        }
    ]);
