import { expect,test  } from "vitest";

import {animal, sum} from './objects'

test('adds 1+2 to equal 3', ()=> {
    expect(sum(1,2)).toBe(3)
});

test('should return the correct string for This blue dog has 4 legs', ()=> {
    const obj={
        name: "dog",
        legs: 4,
        color: "blue"
    }
    expect(animal(obj)).toBe("This blue dog has 4 legs.")
});

test('should return the correct string for This red alien has 8 legs.', ()=> {
    const obj={
        name: "alien",
        legs: 8,
        color: "red"
    }
    expect(animal(obj)).toBe("This red alien has 8 legs.")
})
    

