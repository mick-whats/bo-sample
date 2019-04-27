const BoSample = require('../lib/index')

test('sample', () => {
  const spy = jest.spyOn(console, 'log')
  const mick = new BoSample('mick')
  mick.greet()
  expect(spy).toHaveBeenCalledWith('hello mick')
})
