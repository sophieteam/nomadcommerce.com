
angular.module('Panel', ['ngSanitize']).controller('news', function($scope) {

        Parse.initialize("QjSTiOOVV9yli2Oy4IOgKsJ5HGOeyPnDhiwLEWlb", "Q1Hsc43sqtZjxw42FTDqqreTLm7OV3R8SoDlw0VI");

        var newsObj = Parse.Object.extend("New");
        var query = new Parse.Query(newsObj);

        query.find({
            success: function(newsList) {
                $scope.newsList = newsList;
                $scope.$apply();
            },
            error: function(object, error) {
                console.log(error);
                $scope.$apply();

            }
        });
});
$(document).foundation();

$('.news-list').blurjs({
    source: '#home',
    radius: 14,
    overlay: 'rgba(255,255,255,0.5)'
});