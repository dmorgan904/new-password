// Assignment code here

// Prompt for password length
function generatePassword() {
  var passwordLength = Number(prompt("How long would you like your password to be? It must be at least 8 characters."));
  while (Number.isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = Number(prompt("Keep it between 8 and 128 characters."));
  }

    //Variable Declarations for Prompts
    var uppercase = confirm("Do you want uppercase letters?");
    var lowercase = confirm("Do you want lowercase letters?");
    var numbers = confirm("Do you want numbers?");
    var special = confirm("Do you want special characters?");
    
    // If false, message will appear and return to variable declarations. 
    // If return doesn't work, add variables back
    while (!uppercase && !lowercase && !numbers && !special) {
      alert("Please select at leaset one criteria.");
      uppercase = confirm("Do you want uppercase letters?");
      lowercase = confirm("Do you want lowercase letters?");
      numbers = confirm("Do you want numbers?");
      special = confirm("Do you want special characters?");
    }

    //Create Array for character choices
    var password = ""; 
    var upperLetterChoices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var lowerLetterChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var numberChoices = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    var specialChoices = ['!', '@', '#', '$', '%', '=', '&', '*', '?', '_', '"', '(', '(', '+', ',', '-', '.', '/', ':', ';', '<', '>', '=', '?', '[', ']', '^', '{', '|', '}', '~', '/',];

    //Loop to generate characters and password length
    while(password.length < passwordLength)
    {
      if(uppercase && password.length < passwordLength)
        password += upperLetterChoices[Math.floor(Math.random()*upperLetterChoices.length)];

      if(lowercase && password.length < passwordLength)
        password += lowerLetterChoices[Math.floor(Math.random()*lowerLetterChoices.length)];

      if(numbers && password.length < passwordLength)
        password += numberChoices[Math.floor(Math.random()*numberChoices.length)];

      if(special && password.length < passwordLength)
        password += specialChoices[Math.floor(Math.random()*specialChoices.length)];  
    }

  return password;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

