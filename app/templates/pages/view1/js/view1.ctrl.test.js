describe('view1 controller 테스트 시나리오', function () {

  beforeEach(module('seedApp'));

  beforeEach(inject(function ($httpBackend) {

    // 템플릿 로드 무시
    $httpBackend.when('GET', /^\/app\/templates/).respond('');

  }));

  it('1. 컨트롤러 $scope 테스트', inject(function ($controller, $timeout) {

    var $scope = {};

    $controller('view1Controller', { $scope: $scope });

    $scope.timeout();
    $timeout.flush(600);
    expect($scope.test2).toEqual('345');
    $timeout.flush();
    expect($scope.test2).toEqual('567');

  }));

  it('2. $http.get 테스트', inject(function ($controller, $httpBackend) {

    $httpBackend.expectGET('/api/test.json').respond({ data: { message: 'error' } });

    var $scope = {};
    $controller('view1Controller', { $scope: $scope });

    $httpBackend.flush();

    expect($scope.message).toEqual('error');

  }));


});
