import { expect, test } from 'vitest'
import { getFirst, getLast, getLength } from './arrays'

test ('if array=[1,2,3,4] array.length is 4', () => {
    expect(getLength()).toBe(6)
})

test ('if array=[1,2,3,4] array[1] is 2', () => {
    expect(getFirst()).toBe(10)
})

test ('if array=[1,2,3,4] array[4] is 5', () => {
    expect(getLast()).toBe(60)
})