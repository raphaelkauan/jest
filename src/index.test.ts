import { calc } from "./func/calculadora/calc";
import { divisao } from "./func/divisao";
import { restodivisao } from "./func/restodivisao";
import { subtracao } from "./func/subtracao";
import { soma } from "./func/suma";

// soma
describe("soma", () => {
  it("1 + 1 = 2", () => {
    expect(soma(1, 1)).toBe(2);
  });
});

// divisão
describe("divisão", () => {
  it("1 / 1 = 0", () => {
    expect(divisao(10, 5)).toBe(2);
  });
});

// subtração
describe("subtração", () => {
  it("5 - 1 = 4", () => {
    expect(subtracao(5, 1)).toBe(4);
  });
});

// divisão
describe("resto divisão", () => {
  it("10 / 5 = 5", () => {
    expect(restodivisao(10, 5)).toBe(0);
  });
});

// calculadora
describe("calc", () => {
  it("1 + 5 = 6", () => {
    expect(calc(1, "+", 5)).toBe(6);
  });
});
