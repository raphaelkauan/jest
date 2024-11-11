export function calc(a: number, operacao: string, b: number) {
  if (operacao === "+") {
    return a + b;
  } else if (operacao === "-") {
    return a - b;
  } else if (operacao === "/") {
    return a / b;
  } else if (operacao === "*") {
    return a * b;
  } else if (operacao === "%") {
    return a % b;
  } else {
    return "Operação não encontrada!";
  }
}
