app.factory('employees',['$http',
    function($http){
    		return $http.get('http://e-learning.evolvo.lt/courses/front-end-junior-1/data-mapping/practice/technologies?api_key=xEcg4bXK2UvKf9CUk5EseKXEGbQG8d').success(function(data){
             return data;
			 })
      .error(function(err){
             return err;
             });

    }]);
