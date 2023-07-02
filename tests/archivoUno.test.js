import { describe, it, expect } from "vitest";

function suma(a, b) {
  return a + b;
}

//escribo función tester

describe("SUMA", () => {
  it("suma de 2+2", () => {
    expect(suma(2,2), 4);
  });
});
