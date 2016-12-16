seedApp.controller('view1Controller', function($scope, $timeout, $http){

    initCtrl();

    $scope.timeout = function () {
        $timeout(function(){
            $scope.test2 = '345';
            $timeout(function(){
                $scope.test2 = '567';
            },400);
        }, 500);
    }

    function initCtrl () {

        $scope.array = ['123', '345'];
        
        $scope.test = '123';
        getMessage(function(){
            $scope.message = 'ok';
        });
    }

    function getMessage (callback) {

        $scope.a = 9;

        $http.get('/api/v1/test.json')
            .then(function(res){
                $scope.message = res.data.data.message;

                typeof callback !== 'function' || callback(res);
            }, function(res){
                $scope.res = res;
            });

    }

});