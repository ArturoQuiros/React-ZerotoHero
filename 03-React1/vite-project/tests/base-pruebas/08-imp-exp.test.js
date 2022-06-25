import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";

describe("Pruebas en 08 Import/Export", () => {
  test("getHeroeById: success", () => {
    const id = 1;
    const heroe = getHeroeById(id);

    expect(heroe.name).toEqual("Batman");
  });
  test("getHeroeById: failed ", () => {
    const id = 0;
    const heroe = getHeroeById(id);

    expect(heroe).toBeFalsy();
  });

  //tarea
  test("getHeroesByOwner: success", () => {
    const heroesDC = getHeroesByOwner("DC");
    const heroesMarvel = getHeroesByOwner("Marvel");

    expect(heroesDC.length).toBe(3);
    expect(heroesMarvel.length).toEqual(2);
  });
});
