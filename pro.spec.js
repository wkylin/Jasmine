/**
 * Created by Administrator on 2017/3/5.
 */
describe('Protractor Demo App', function () {
  it('should have a title', function () {
    browser.get('http://localhost:4444/wd/hub');

    expect(browser.getTitle()).toEqual('Super Calculator');
  });
});