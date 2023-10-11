import fs from "fs";
import { beforeEach, expect, it, vi } from "vitest";
import { Window } from "happy-dom";
import { showError } from "./dom";
import path from "path";

const htmlDoctPath = path.join(process.cwd(), "index.html");
const htmlDocContent = fs.readFileSync(htmlDoctPath).toString();

const window = new Window();
const document = window.document;
vi.stubGlobal("document", document);

beforeEach(() => {
  document.body.innerHTML = "";
  document.write(htmlDocContent);
});

it("should add an error paragraph to the id='errors' element", () => {
  showError("test");

  const errorsEl = document.getElementById("errors");
  const errorParagraph = errorsEl.firstElementChild;
  expect(errorParagraph).not.toBeNull();
});

it("should not contain an error paragraph initially", () => {
  const errorsEl = document.getElementById("errors");
  const errorParagraph = errorsEl.firstElementChild;

  expect(errorParagraph).toBeNull();
});

it("should output the provided message in the error paragraph", () => {
  const testErrorMsg = "test";

  showError(testErrorMsg);

  const errorsEl = document.getElementById("errors");
  const errorParagraph = errorsEl.firstElementChild;

  expect(errorParagraph.textContent).toBe(testErrorMsg);
});
