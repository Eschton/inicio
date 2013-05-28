'use strict';

function ProjectListController($scope, Project){
    $scope.projects = Project.query();
    $scope.orderProp = 'age';

}

function ProjectDetailController($scope, $routeParams, Project){
    $scope.project = Project.get({projectId: $routeParams.projectId}, function(project){
        
        if(project.scheme == 'light') {
            $('body').removeClass('dark');
            $('body').addClass('light');
        } else if ((project.scheme == 'dark')){
            $('body').removeClass('light');
            $('body').addClass('dark');
        }
        
        loadSplash();

    });

    $scope.setImage = function(imageUrl){
        $scope.mainImageUrl = imageUrl;
    };



}