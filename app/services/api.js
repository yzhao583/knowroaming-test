'use strict';

angular.module('KrChessApp')

    // NOTE: add dependency if needed.
    // TODO: add implementation.
    .service('Api', ['$http',

        function($http, GET_DIMENSIONS_ENDPOINT) {

            //send http request to api
            this.getDimensions = function() {
                return $http.get('https://apn.knowroaming.com/krchessapp-api/get-dimensions/');
            };

            return {
                getDimensions: this.getDimensions
            };
        }
    ]);
