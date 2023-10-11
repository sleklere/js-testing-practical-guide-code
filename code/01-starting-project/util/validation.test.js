import { expect, it } from "vitest";
import { validateNotEmpty } from "./validation";

it("should throw an error if there's no text", () => {
  const testInput = "";

  const validationFn = () => validateNotEmpty(testInput);

  expect(validationFn).toThrow();
});
it("should throw an error if the input consists of only spaces", () => {
  const testInput = " ";

  const validationFn = () => validateNotEmpty(testInput);

  expect(validationFn).toThrow();
});
it("should throw an error with the provided error message", () => {
  const testInput = "";
  const testErrorMessage = "Test";

  const validationFn = () => validateNotEmpty(testInput, testErrorMessage);

  expect(validationFn).toThrow(testErrorMessage);
});
