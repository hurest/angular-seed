seedApp.factory('httpInterceptor', function($q) {

    return {
        
        'request': function(config) {

            console.log(config);

            return config;
        },

        'response': function(response) {

            console.log(response);
            
            return response;
        },

        // 에러 처리
        'responseError': function (rejection) {

            return $q.reject(rejection);
            
        }
    };

});