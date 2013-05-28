'use strict';

angular.module('projectFilters',[]).filter('checkmark',function(){
    return function(input) {
        return input ? '\u2713' : '\u27187';
    };
});