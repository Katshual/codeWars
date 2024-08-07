import { test, expect } from "vitest";
import { sale_hotdogs, saleHotdogs } from "./ifElseAndTernaryOperator";

test('if the number of hotdogs <5 , the price will be 100 cents', ()=> {
    expect(saleHotdogs(3)).toBe(300)
});

test('if the number of hotdogs >= 5 and  < 10 , the price will be 95 cents', ()=> {
    expect(saleHotdogs(6)).toBe(570)
}); 

test('if the number of hotdogs >= 10 , the price will be 90 cents', ()=> {
    expect(saleHotdogs(11)).toBe(990)
}); 

test('if the number of hotdogs <5 , the price will be 100 cents', ()=> {
    expect(sale_hotdogs(3)).toBe(300)
});

test('if the number of hotdogs >= 5 and  < 10 , the price will be 95 cents', ()=> {
    expect(sale_hotdogs(5)).toBe(475)
}); 

test('if the number of hotdogs >= 10 , the price will be 90 cents', ()=> {
    expect(sale_hotdogs(10)).toBe(900)
})