import { test, expect } from "vitest";
import { trueOrFalse } from "./boleanAndConditionalIfElse";

test('if val is false, it should return false', ()=> {
    expect(trueOrFalse(false)).toBe('false')
});

test('if val is true, it should return true', ()=> {
    expect(trueOrFalse(true)).toBe('true')
});

test('if val is 0, it should return false', ()=> {
    expect(trueOrFalse(0)).toBe('false')
});

test('if val is -0, it should return false', ()=> {
    expect(trueOrFalse(-0)).toBe('false')
});

test('if val is "", it should return false', ()=> {
    expect(trueOrFalse("")).toBe('false')
});

test('if val is NaN, it should return false', ()=> {
    expect(trueOrFalse("0")).toBe('false')
});

test('if val is undefined, it should return false', ()=> {
    expect(trueOrFalse()).toBe('false')
});
