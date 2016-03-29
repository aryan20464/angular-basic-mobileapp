/**
 * Created by chakri on 15/2/16.
 */
app.controller('MainController', ['$scope', 'forecast', function($scope, forecast) {
    forecast.success(function(data) {
        $scope.fiveDay = data;
    });
}]);