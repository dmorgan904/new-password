// Assignment code here

//Button
//var generateButton = document.getElementById('generateNewPassord');
//generateButton.addEventListener('click', function() {
  //generateNewPassword();
//});

// Prompt for password length
function createPassword() {
  var length = Number(prompt("How long would you like your password to be? It must be at least 8 characters."));
  while (Number.isNaN(length) || length < 8 || length > 128) {
    length = Number(prompt("Keep it between 8 and 128 characters."));

}





























// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

// }

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword); 
} 
