import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("Pruebas en 07 Arrays", () => {
  test("Prueba 1: retornaArreglo", () => {
    const [letras, numeros] = retornaArreglo();
    expect(letras).toBe("ABC");
    expect(numeros).toEqual(expect.any(Number));
  });
});
