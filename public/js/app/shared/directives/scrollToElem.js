/**
 * Created by Denys_Timchenko on 27.01.2016.
 */
'use strict';

angular.module('ds.shared')
    .directive('scrollToElem',['$window', function() {
        return {
            restrict: 'EA',
            scope: {
                scrollTo: '@'
            },
            link: function(scope, $elm) {
                $elm.on('click', function() {
                    $('html,body').animate({scrollTop: $(scope.scrollTo).offset().top - 75}, 'slow');
                });
            }
        };
    }]);