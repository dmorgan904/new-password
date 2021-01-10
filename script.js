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

    //Variable Declarations for Prompts
    var uppercase = confirm("Do you want uppercase letters?");
    var lowercase = confirm("Do you want lowercase letters?");
    var numbers = confirm("Do you want numbers?");
    var special = confirm("Do you want special characters?");

    // If false, message will appear and return to variable declarations. If return doesn't work, add variables back
    while (!uppercase && !lowercase && !numbers && !special) {
      alert("Please select one criteria.");
      uppercase = confirm("Do you want uppercase letters?");
      lowercase = confirm("Do you want lowercase letters?");
      numbers = confirm("Do you want numbers?");
      special = confirm("Do you want special characters?");
    }

    //Create Array for character choices
    var password = ""; 
    var upperLtrChoices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var lowerLtrChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var numberChoices = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    var specialChoices = ["!","@","#","$","%","^","&","*","(",")","_","+"];


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
