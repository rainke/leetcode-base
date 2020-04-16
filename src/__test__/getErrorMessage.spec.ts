import getErrorMessage from '../index';

describe('getErrorMessage', () => {
  it('should return', () => {
    expect(getErrorMessage()).toEqual({
      message: 'Error raised',
      stack: [
        {
          line: 2,
          column: 9,
          filename: 'http://192.168.31.8:8000/c.js',
        }
      ]
    });
  });
});
