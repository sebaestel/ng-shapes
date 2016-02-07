'use strict';
angular.module('appTest', ['ng-shapes'])
    .controller('appTestController', ['$scope', function ($scope) {
        $scope.circle = [
            {
                'type': 'circle'
            }
        ];
        $scope.circleImage = [
            {
                'type': 'circle',
                'image': 'http://lorempixel.com/500/500/nature/'
            }
        ];
        $scope.square = [
            {
                'type': 'square'
            }
        ];
        $scope.squareImage = [
            {
                'type': 'square',
                'image': 'http://lorempixel.com/500/500/nature/'
            }
        ];
        $scope.triangle = [
            {
                'type': 'triangle'
            }
        ];
        $scope.triangleImage = [
            {
                'type': 'triangle',
                'image': 'http://lorempixel.com/500/500/nature/'
            }
        ];

    }]);
