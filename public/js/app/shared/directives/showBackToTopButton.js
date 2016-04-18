/**
 * Created by Denys_Timchenko on 28.01.2016.
 */

'use strict';

angular.module('ds.shared')
    .directive('showBackToTopButton',['$window', '$document', function($window, $document) {
        return {
            restrict: 'EA',
            link: function(scope) {
                $document.on('scroll', function() {
                    var reviewPosition = $('#product-details-nav').offset().top;
                    scope.btnVisible = $(this).scrollTop() > reviewPosition;
                    scope.$applyAsync();
                });
            }
        };
    }]);