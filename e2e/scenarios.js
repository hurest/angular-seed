/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  describe('1. index.html 접속', function() {

    it('첫 접속 시 view1 로 가는지 체크', function() {

      browser.get('/');
      expect(browser.getLocationAbsUrl()).toMatch("/view1");

    });

  });

  describe('2. view2 로 접속', function() {


    it('view2Body 내용을 확인', function() {

      browser.get('/#!/view2');

      var body = element( by.id('view2Body') );
      
      expect( body.getText() ).toEqual('view2\n입니다.');
      
    });

  });

});
