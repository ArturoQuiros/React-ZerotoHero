import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Pruebas en 09 Promesas", () => {
  test("getHeroeByIdAsync: success ", (done) => {
    const heroe = getHeroeByIdAsync(2)
      .then((heroe) => {
        done();
      })
      .catch((error) => {
        done();
      });
  });
});
