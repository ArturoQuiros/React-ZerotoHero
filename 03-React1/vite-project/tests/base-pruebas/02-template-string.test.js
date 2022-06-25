import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe("Pruebas en 02-string", () => {
  test("Prueba de que retorne un saludo con el nombre", () => {
    const name = "Arturo";
    const msg = getSaludo(name);
    expect(msg).toBe(`Hola ${name}`);
  });
});
