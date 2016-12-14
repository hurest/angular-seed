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
        
        $scope.test = '123';
        getMessage();
    }

    function getMessage () {

        $scope.a = 9;

        $http.get('/api/test.json')
            .then(function(res){
                $scope.message = res.data.data.message;
            }, function(res){
                $scope.res = res;
            });

    }

});