'use strict';

angular.module('project', ['projectFilters', 'projectServices']).
    config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/projects', {templateUrl:'partials/project-list.html', controller:ProjectListController}).
        when('/projects/:projectId', {templateUrl: 'partials/project-details.html', controller: ProjectDetailController}).
    otherwise({redirectTo:'/projects'});
}]);