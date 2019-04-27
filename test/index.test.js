const {{name:pascal}} = require('../lib/index')

test('sample', () => {
  const spy = jest.spyOn(console, 'log')
  const mick = new {{name:pascal}}('mick')
  mick.greet()
  expect(spy).toHaveBeenCalledWith('hello mick')
})
