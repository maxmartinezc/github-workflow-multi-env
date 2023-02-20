const request = require("supertest");
  it("should return App Handler", async () => {
    const app = require("../www/awsl-handler");
    expect(app).toHaveProperty('handler')
  });

  it("should return app and version info", async () => {
    const app = require("../app/app");
    const res = await request(app).get("/api/v1/hello");
    expect(res.statusCode).toBe(200);
    expect(res.body).toMatchObject({
      app: expect.any(String),
      version: expect.any(String)
    });
  });
