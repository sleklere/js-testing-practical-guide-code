import { expect, it } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example";

// testing for functions that yield callbacks
it("should generate a token value", done => {
  const testUserEmail = "test@test.com";

  generateToken(testUserEmail, (err, token) => {
    expect(token).toBeDefined();
    done();

    // try {
    //   expect(token).toBe(2);
    //   done();
    // } catch (err) {
    //   done(err);
    // }
  });
});

// testing for async functions
it("should generate a token value", () => {
  const testUserEmail = "test@test.com";

  // (important to use the return)
  return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
});

it("should generate a token value", async () => {
  const testUserEmail = "test@test.com";

  const token = await generateTokenPromise(testUserEmail);

  expect(token).toBeDefined();
});
