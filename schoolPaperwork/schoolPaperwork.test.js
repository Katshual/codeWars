import { expect, test } from 'vitest'
import {paperwork} from './schoolPaperwork'

test('classmate and page >0' ,()=> {
    expect (paperwork(5,5)).toBe(25)
})

test('classmate >0 and page <0' ,()=> {
    expect (paperwork(5,-5)).toBe(0)
})

test('classmate <0 and page >0' ,()=> {
    expect (paperwork(-5,5)).toBe(0)
})

test('classmate >0 and page =0' ,()=> {
    expect (paperwork(5,0)).toBe(0)
})

test('classmate=0 and page >0' ,()=> {
    expect (paperwork(0,5)).toBe(0)
})

test('classmate and page =0' ,()=> {
    expect (paperwork(0,0)).toBe(0)
})