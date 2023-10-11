import { describe, expect, it } from "vitest";
import { HttpError, ValidationError } from "./errors";

describe("HttpError class", () => {
  it("should contain the provided statusCode, message and data", () => {
    const testStatus = 1;
    const testMessage = "Test";
    const testData = { key: "test" };

    const testError = new HttpError(testStatus, testMessage, testData);

    expect(testError.statusCode).toBe(testStatus);
    expect(testError.message).toBe(testMessage);
    expect(testError.data).toBe(testData);
  });
  it("should contain undefined as data if no data is provided", () => {
    const testStatus = 1;
    const testMessage = "Test";

    const testError = new HttpError(testStatus, testMessage);

    expect(testError.data).toBeUndefined();
  });
});

describe("ValidationError class", () => {
  it("should have a message", () => {
    const testMessage = "test";

    const testValidation = new ValidationError(testMessage);

    expect(testValidation.message).toBe(testMessage);
  });
});
