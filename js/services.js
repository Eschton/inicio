'use strict';

angular.module('projectServices',['ngResource']).
    factory('Project', function($resource){
        return $resource('projects/:projectId.json',{}, {
            query: {method:'GET',params:{projectId:'projects'}, isArray:true}
        });
    });