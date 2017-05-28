'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('App integration tests', function () {
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        browser.get('/index.html');
    });

    it('should redirect index.html to index.html#/', function () {
        //TODO: Get some tests here from Protracter Recorder
    });
});