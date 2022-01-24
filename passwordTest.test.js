const passwordOperations = require("./verifyPassword");

describe("Check if errors are thrown for password not being longer than 8 characters and have no numerical characters", () => {
  test("should throw error for password not being longer than 8 characters long and for password not having numerical characters", () => {
    expect(() => {
      passwordOperations.validatePassword("Abv");
    }).toThrow(
      "Password needs to be larger than 8 characters long. Password requires atleast 1 number."
    );
  });
});

describe("Check if errors are thrown for password not having a lowercase character.", () => {
  test("should throw error for password not being having a lowercase character.", () => {
    expect(() => {
      passwordOperations.validatePassword("ABC");
    }).toThrow("Password requires atleast 1 lowercase letter.");
  });
});

describe("Check if password is accepted if it meets 3 conditions.", () => {
  test("Should return true for password meeting 3 out of the 5 conditions.", () => {
    expect(passwordOperations.validatePassword("AbC1")).toBe(true);
  });
});
