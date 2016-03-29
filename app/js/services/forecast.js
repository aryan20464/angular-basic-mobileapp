/**
 * Created by chakri on 16/2/16.
 */

app.factory('forecast', ['$http', function($http) {
    return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json')
        .success(function(data) {
            return data;
        })
        .error(function(err) {
            return err;
        });
}]);

