// Assignment code here
// This is the function within the var "password"
function generatePassword() {
  // // pwLength var is defined as 
  let pwLength = (function getUserInput() {
      // // prompt makes a window pop up to collect user input
    var userInput = prompt("Choose a password length\n⚠️at least 8 and no more than 128⚠️");
    if(!userInput) {
      return;
    }
    // isNan checks to see if the input is not a number
    if(isNaN(userInput)){
      alert('please enter a number');
      getUserInput();
    }
    if(userInput < 8) {
      alert('please enter a number that is at least 8 or more');
      getUserInput(); 
    }
    if(userInput > 128) {
      alert('Please enter a number that is no more than 128');
      getUserInput();
    }
    // this returns value from the getUserInput function to pwLength
    return userInput;
  }());
   // //  return sets the value of the function
  return pwLength;
}

// prompt user to enter a number

// Get references to the #generate element
// this declares generateBtn and connects it with 
// the button's id in the html
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// this function runs when button is clicked
function writePassword() {
  //password is declared as a function
  // generatePassword is declared above
  var password = generatePassword();
  // the text area that displays the pw is defined
  // and connected to the textarea in the html
  var passwordText = document.querySelector("#password");
// what is displayed in the textarea
// is what the generatePassword function produces
  passwordText.value = password;

}

// Add event listener to generate button
// This is what listens for the click event and reacts
// with a series of actions
// when button is clicked run function writePassword
generateBtn.addEventListener("click", writePassword);
