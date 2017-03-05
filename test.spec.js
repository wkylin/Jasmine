/**
 * Created by Administrator on 2017/3/5.
 */

describe('A suite of string util',function(){
  it('is string', function(){
    expect(isString('ss').toBeTruthy());
    expect(isString(1).toBeFalsy());
  })
})