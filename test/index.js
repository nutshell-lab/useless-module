import test from 'ava'
import { add } from '../src'

test('can add two numbers', t => {
  const result = add(1, 2)
  const expected = 3
  t.is(result, expected)
})
