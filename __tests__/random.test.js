const randomNumber = require('../lib/random.js');

test('gets random number between 1 and 10', () => {
  expect(e=randomNumber()),toBeGreaterthanOrEqual(1);
  expect(randomNumber()).toBeLessthanOrEqual(10);
});