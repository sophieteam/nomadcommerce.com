angular.module('Panel', ['ngSanitize']).controller('newsDetails',  function($scope) {

        Parse.initialize("QjSTiOOVV9yli2Oy4IOgKsJ5HGOeyPnDhiwLEWlb", "Q1Hsc43sqtZjxw42FTDqqreTLm7OV3R8SoDlw0VI");


        function getParameterByName(name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(location.search);
            return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }
        var newsId = getParameterByName('id');

        var newsObj = Parse.Object.extend("New");
        var query = new Parse.Query(newsObj);

        query.get(newsId,{
            success: function(obj) {
                $scope.newsContent = obj._serverData.newsContent;
                $scope.newsTitle   = obj._serverData.newsTitle;
                $scope.newsSpot    = obj._serverData.newsSpot;
                $scope.newsDate    = obj._serverData.newsDate;
                $scope.newsImg     = obj._serverData.newsImg._url;
                $scope.$apply();
            },
            error: function(object, error) {
                console.log(error);
                $scope.$apply();

            }
        });
});
$(document).foundation();

$('.blur').blurjs({
    source: '#home',
    radius: 14,
    overlay: 'rgba(255,255,255,0.5)'
});
