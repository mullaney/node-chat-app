var expect = require('expect');
var {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var res = isRealString(7);
    expect(res).toBe(false);
  })

  it('should reject strings with only spaced', () => {
    var res = isRealString('     ');
    expect(res).toBe(false);
  })

  it('should allow string with non-space characters', () => {
    var res = isRealString('valid string    ');
    expect(res).toBe(true);
  })
})
