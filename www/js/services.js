angular.module('app.services', [])

.service('Survey', ['$q', '$http', function($q, $http){

  var upi_url = 'https://sheetsu.com/apis/v1.0/85f116651c68';
  var currentID = 0;

  var ret = {
      all:function(){
        var deferred = $q.defer();

        $http.get(api_url).then(function(resp){
              if(resp.data.length > 0) currentID = parseInt(resp.date[resp.data.length-1].id)
              deferred.resolve(resp.data);
        });

        return deferred.promise;
      },
      add: function(data){
        var deferred = $q.defer();

        currentID++;
        data.id = currentID;

        $http.post(api_url, data).then(function(resp){
          deferred.resolve(resp.data);
        });

        return deferred.promise;

      }
  }
  ret.all();

  return ret;
}]);
