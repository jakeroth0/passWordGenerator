// Assignment code here
// This is the function within the var "password"
function getPasswordLength() {
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
    // console.log(userInput);
    return userInput;
  }());
   // //  return sets the value of the function
  return pwLength;
}

function getTrueFalse(characterType) {
  var trueFalse = (function getUserInput() {
    // // prompt makes a window pop up to collect user input
  var userInput = prompt("Do you want to use "+ characterType +"? y/n");
  if(!userInput) {
    alert('cannot be blank');
    getUserInput();
  }
  if(userInput != 'y' && userInput!= 'n') {
    alert('please enter y/n');
    getUserInput();
  }
  // if(userInput == 'n' ) {
  //   alert('please select at least one character type')
  //   getUserInput();
  // } I somehow need to make sure at least one character set is selected
  if(userInput == 'y') {
    alert('you have included '+ characterType);
    return true;
  }
  if(userInput == 'n') {
    alert('you have not included '+ characterType);
    return false;
  }
}());
 // //  return sets the value of the function
return trueFalse;
}

// Write password to the #password input
// this function runs when button is clicked
function writePassword() {
  //password is declared as a function
  // getPasswordLength is declared above
  var passwordLength = getPasswordLength();
  var useLower = getTrueFalse("lower case characters");
  var useUpper = getTrueFalse("upper case characters");
  var useSym = getTrueFalse("symbols");
  var useNums = getTrueFalse("numbers");
  var cBank = [];
  var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var symChars = ["!","\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "\\", "^", "_", "\`", "{", "|", "}", "~"];
  var numsChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(passwordLength, useLower, useUpper, useSym, useNums)
  if (useLower) {
    cBank = cBank.concat(lowerChars)
  }
  if (useUpper) {
    cBank = cBank.concat(upperChars)
  }
  if (useSym) {
    cBank = cBank.concat(symChars)
  }
  if (useNums) {
    cBank = cBank.concat(numsChars)
  }
  
  console.log(cBank);

var password = "" 

  for (let i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random()* cBank.length);
    password = password + cBank[index];
    // password += cBank[Math.floor(Math.random()* (cBank.length - 1))]
  }
  // the text area that displays the pw is defined
  // and connected to the textarea in the html
  var passwordText = document.querySelector("#password");
// what is displayed in the textarea
// is what the generatePassword function produces
  passwordText.value = password;
}

// Get references to the #generate element
// this declares generateBtn and connects it with 
// the button's id in the html
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
// This is what listens for the click event and reacts
// with a series of actions
// when button is clicked run function writePassword
if (generateBtn) {
generateBtn.addEventListener("click", writePassword);
}