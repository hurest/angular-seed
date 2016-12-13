# ngMock

### Provider

1. [$exceptionHandlerProvider](https://docs.angularjs.org/api/ngMock/provider/$exceptionHandlerProvider)

### Service

1. [$exceptionHandler](https://docs.angularjs.org/api/ngMock/service/$exceptionHandler)

2. [$log](https://docs.angularjs.org/api/ngMock/service/$log)

3. [$interval](https://docs.angularjs.org/api/ngMock/service/$interval)
```javascript
    $interval();
    $interval.flush();
    $interval.cancel();
```
4. [$animate](https://docs.angularjs.org/api/ngMock/service/$animate)

5. [$httpBackend](https://docs.angularjs.org/api/ngMock/service/$httpBackend)
```javascript
    $httpBackend.when();
    $httpBackend.expect();
    $httpBackend.flush();
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
    $httpBackend.resetExpectations();
```

6. [$timeout](https://docs.angularjs.org/api/ngMock/service/$timeout)
```javascript
    $timeout.flush();
    $timeout.verifyNoPendingTasks();
```
7. [$controller](https://docs.angularjs.org/api/ngMock/service/$controller)

8. [$componentController](https://docs.angularjs.org/api/ngMock/service/$componentController)

### Type

1. [angular.mock.TzDate](https://docs.angularjs.org/api/ngMock/type/angular.mock.TzDate)

2. [$rootScope.Scope](https://docs.angularjs.org/api/ngMock/type/$rootScope.Scope)

### Function

1. [angular.mock.dump](https://docs.angularjs.org/api/ngMock/function/angular.mock.dump)

2. [angular.mock.module](https://docs.angularjs.org/api/ngMock/function/angular.mock.module)

3. [angular.mock.module.sharedInjector](https://docs.angularjs.org/api/ngMock/function/angular.mock.module.sharedInjector)

4. [angular.mock.inject](https://docs.angularjs.org/api/ngMock/function/angular.mock.inject)