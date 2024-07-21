import { expect, test } from 'vitest';
import { sum, Dad, Bee, banana }  from './dataTypesString';

test(' adds 1+2 to equal 3', ()=> {
    expect(sum(1, 2)).toBe(3)
})

test(" concatene 'D'+'a'+'D'  to equal 'Dad'", ()=> {
    expect(Dad()).toBe('Dad')
})

test(" concatene 'B'+'e'+'e'  to equal 'Bee'", ()=> {
    expect(Bee()).toBe('Bee')
})

test(" concatene 'b'+'a'+'n'+'a'+'n'+'a'  to equal 'banana'", ()=> {
    expect(banana()).toBe('banana')
})

