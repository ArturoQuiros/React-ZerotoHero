import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Pruebas en 05 funciones", () => {
  test("Prueba 01: getUser ", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const user = getUser();
    expect(user).toEqual(testUser);
  });

  test("Prueba 02: getUsuarioActivo ", () => {
    const testUser = {
      uid: "ABC567",
      username: "Arturo",
    };
    const user = getUsuarioActivo("Arturo");

    expect(user).toEqual(testUser);
  });
});
