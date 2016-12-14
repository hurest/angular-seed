// 
console.log = function(){};

describe('view1 controller 테스트 시나리오', function () {

  beforeEach(module('seedApp'));

  beforeEach(inject(function ($httpBackend) {

    // 템플릿 로드 무시
    $httpBackend.when('GET', /^\/app\/templates/).respond('');

  }));
  
  xit("0. can be declared 'xit'", function() {
    expect(true).toBe(false);
  });

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

    var a = ["foo", "bar", "baz"];

    $httpBackend.expectGET('/api/test.json').respond({ data: { message: 'error' } });

    var $scope = {};
    $controller('view1Controller', { $scope: $scope });

    $httpBackend.flush();

    expect(true).toBe(true);
    // object 내 item 에 대한 정의만 검사 
    // expect(scope.interval).not.toBeDefined(); => js error
    expect($scope.interval).not.toBeDefined();
    expect(null).toBeNull();
    // 리턴값이 true 인 경우만 ( !, 0, null, undefined 제외 )
    expect(!'true').not.toBeTruthy();
    expect(!'true').toBeFalsy();

    expect($scope.array).toContain('123');

    /*
      expect(e).toBeLessThan(pi);
      expect(pi).toBeGreaterThan(e);
      expect(pi).not.toBeCloseTo(e, 2);
      expect(bar).toThrow();
      expect(foo).toThrowError("foo bar baz");
    */

    expect($scope.message).not.toEqual('error');
    expect($scope.message).toEqual('ok');

    expect($scope.message).toMatch(/^o/);

  }));


});
