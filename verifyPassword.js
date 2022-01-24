/** HIGH LEVEL OVERVIEW
 * The function stores a counter which is used to check how many requirements the password succeeds.
 * This function will first check if the password contains a lowercase letter and if not, throw an error immediatley.
 * The function then checks if the password contains atleast 1 capital letter and if so, it increments the counter by 1 or throws an error message.
 * The function then checks if the password's length is longer than 8 characters and if so, it increments the counter by 1 or throws an error message .
 * The function then checks if the password contains a number and if so, it increments the counter by 1 or throws an error message.
 * The function then checks if the counter lower than 2 and returns error messages relating to the problems or it returns true as a value to signalize the password has satisfied the requirements .
 */

const passwordOperations = {
  validatePassword: function (password) {
    let counter = 0;
    let errorMessage = "";

    // Use string search with regular expression to see if password contains atleast 1 lowercase letter.
    if (password.search(/[a-z]/) > -1) {
      // Use string search with regular expression to see if password contains atleast 1 uppercase letter and increment counter, else add to the error message.
      if (password.search(/[A-Z]/) > -1) {
        counter++;
      } else {
        errorMessage += "Password requires atleast 1 capital letter. ";
      }
      // Use length property of password to see if it is longer than 8 characters long and increment counter, else add to the error message.
      if (password.length > 8) {
        counter++;
      } else {
        errorMessage += "Password needs to be larger than 8 characters long. ";
      }
      // Use string search with regular expression to see if password contains atleast 1 number and increment counter, else add to the error message.
      if (password.search(/[0-9]/) > -1) {
        counter++;
      } else {
        errorMessage += "Password requires atleast 1 number. ";
      }

      // Check if the counter is less than 2 and if so, throw error messages, else return true to indicate the password passed all requirements.
      if (counter < 2) {
        throw errorMessage;
      } else {
        return true;
      }
    } else {
      throw "Password requires atleast 1 lowercase letter.";
    }
  },
};

module.exports = passwordOperations;
