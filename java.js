const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

function generatePassword() {
  let length = prompt("How many characters should your password contain? (Must be between 8 and 128 characters)");
  while (isNaN(length) || length < 8 || length > 128) {
    length = prompt("Please enter a number between 8 and 128.");
  }

  let includeLowercase = confirm("Include lowercase letters?");
  let includeUppercase = confirm("Include uppercase letters?");
  let includeNumbers = confirm("Include numbers?");
  let includeSpecialChars = confirm("Include special characters?");
  
  while (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialChars) {
    alert("Please include at least one character set.");
    includeLowercase = confirm("Include lowercase letters?");
    includeUppercase = confirm("Include uppercase letters?");
    includeNumbers = confirm("Include numbers?");
    includeSpecialChars = confirm("Include special characters?");
  }
  
  let charset = "";
  if (includeLowercase) {
    charset += lowercaseLetters;
  }
  if (includeUppercase) {
    charset += uppercaseLetters;
  }
  if (includeNumbers) {
    charset += numbers;
  }
  if (includeSpecialChars) {
    charset += specialChars;
  }
  
  let password = "";
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  
  return password;
}

document.getElementById("generate").addEventListener("click", function() {
  document.getElementById("password").value = generatePassword();
});