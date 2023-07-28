const app = require("../src/app"); //traemos el server
const session = require("supertest"); //importamos supertest, nos permite hacer una request
const agent = session(app);

describe("Test de RUTAS", () => {
  describe("GET Characters/:id", () => {
    it("Responde con un status:200", async () => {
      await agent.get("/rickandmorty/character/1").expect(200);
    });

    it('Responde un objeto con las propiedades: "id","name","species","gender","status","origin" e "image"', async () => {
      const response = await agent.get("/rickandmorty/character/2");
      //siguiente linea es la más escalable si luego quiere agregar y verificar nuevas propiedades
      const props = [
        "id",
        "name",
        "species",
        "gender",
        "status",
        "origin",
        "image",
      ];

      props.forEach((prop) => {
        expect(response.body).toHaveProperty(prop);
      });

      console.log("ok");
    });

    it("Si hay un error responde con status: 500", async () => {
      const response = await agent
        .get("/rickandmorty/character/11516158")
        .expect(500);
      expect(response.statusCode).toBeGreaterThan(400);
    });
  });

  describe("GET /login", () => {
    it("GET with correct data, should return the access true", async () => {
      const response = await agent.get(
        "/rickandmorty/login?email=ronaldmatiasrudas@gmail.com&password=hola1234"
      );
      expect(response.body.access).toEqual(true);
    });

    it("GET with correct data, should return the access false", async () => {
      const response = await agent.get(
        "/rickandmorty/login?email=ronaldmatiasrudas@gmail.com&password=pepep"
      );
      expect(response.body.access).toEqual(false);
    });
  });

  describe("Favorites", () => {
    const character1 = { id: 1, name: "Messi" };
    const character2 = { id: 2, name: "Pepe" };
    describe("POST /fav", () => {
      it("POST should add the character to the favs", async () => {
        const response = await agent.post("/rickandmorty/fav").send(character1);
        expect(response.body).toContainEqual(character1);
      });

      it("POST should add the second character to the favs", async () => {
        const response = await agent.post("/rickandmorty/fav").send(character2);
        expect(response.body.length).toBe(2);
        expect(response.body).toContainEqual(character1);
        expect(response.body).toContainEqual(character2);
      });
    });

    describe("DELETE ", () => {
      it("Should return the previous characters when sending wrong data", async () => {
        const response = await agent.delete("/rickandmorty/fav/68");
        expect(response.body).toContainEqual(character1);
        expect(response.body).toContainEqual(character2);
      });

      it("Should delete the character when sending correct information", async () => {
        const response = await agent.delete("/rickandmorty/fav/2");
        expect(response.body).toContainEqual(character1);
        expect(response.body).not.toContainEqual(character2);
      });
    });
  });
});
