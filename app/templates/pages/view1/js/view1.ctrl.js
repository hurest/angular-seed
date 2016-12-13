seedApp.controller('view1Controller', function($scope, $timeout, $http){

    initCtrl();

    $scope.testFunc = function () {
        return testFunc();
    };

    $scope.test = function () {
        console.log('exec test func');
        $timeout(function(){
            $scope.test2 = '345';
        }, 500);
    };

    function initCtrl () {

        $scope.test = '123';

        getMessage();

        
    }

    function testFunc () {
        return 'testFunc';
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