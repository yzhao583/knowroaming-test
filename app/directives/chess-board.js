'use strict';

angular.module('KrChessApp')

    // NOTE: add dependency if needed.
    .directive('chessBoard', ['$compile',
        function($compile) {
            return {
                restrict: 'E',
                templateUrl: 'app/directives/chess-board.html',
                scope: {
                    dim: '@dim',
                    getDim: '&'  
                },
                link: function(scope, element) {
                    
                }
            }
        }
    ]);
