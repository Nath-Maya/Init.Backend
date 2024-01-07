import mongoose from "mongoose";
import UserMongoDao from "../daos/mongo/user.mongo.dao.js";
import Assert from "assert";
import connectMongoDB from "../config/configMongoDB.js";
import Chai from "chai";
import Supertest from "supertest";

mongoose.connect(config.mongoDB.URL);

const assert = Assert.strict;
const expect = Chai.expect;
const requester = Supertest("http://localhost:3000");

describe("Testing User DAO", () => {
  before(function () {
    this.usersDAO = new UserMongoDao();
  });
  it("Debe devolver los usuarios de la base de datos", async function () {
    this.timeout(5000);
    try {
      const result = await this.usersDao.get();
      assert.strictEqual(Array.isArray(result), true);
      expect(Array.isArray(result)).to.be.equals(true);
    } catch (error) {
      console.error("Error durante el test: ", error);
      assert.fail("Test get usuario con error");
    }
  });

  it("El DAO debe agregar a un usuario en la base de datos", async function () {
    let mockUser = {
      first_name: "Test First Name",
      last_name: "Test Last Name",
      email: "Test Email",
      age: 30,
      password: "Test Pass",
      rol: "Test Rol",
    };
    const result = await this.usersDao.addUser(mockUser);
    assert.ok(result._id);
    expect(result).to.have.property("_id");
  });

  it("El endpoint GET /users debe devolver todos los usuarios", async function () {
    const response = await requester.get("/users");
    // Verifica el código de estado HTTP
    assert.strictEqual(response.status, 200);
    // Verifica el tipo de contenido de la respuesta
    expect(response.type).to.equal("application/json");
    // Verifica que la respuesta tenga una propiedad 'status' con valor 'success'
    expect(response.body).to.have.property("status", "success");
  });
});
