import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("Pruebas en 11 Async Await", () => {
  test("getHeroeByIdAsync: success", async () => {
    const url = await getImagen();
    console.log(url);

    expect(typeof url).toBe("object");
  });
});
