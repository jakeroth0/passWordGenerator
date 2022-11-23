// Assignment code here
// This is the function within the var "password"
function generatePassword() {
  // testPrompt var will become the value typed in
  // by the user and the prompt is a set js action
  // that makes a window pop up to collect user input
  // var pwLength = prompt('Choose a password length\n⚠️at least 8 and no more than 128⚠️');
  // pwLength var is defined as 
  var pwLength = (function ask() {
    var n = prompt('Choose a password length\n⚠️at least 8 and no more than 128⚠️');
    return isNaN(n) || +n > 128 || +n < 8 ? ask() : n;
  }());
  // var charTypes = prompt('Which of the following character types would you like to include?');
  //  return sets the value of the function
  // generatePassword
  return (pwLength);
}

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
