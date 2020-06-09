// console.log ("hello world");
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = randomize();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var lowercase = "abcdefghijklmnopqrstuvwxyz";
// console.log(lowercase);
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialchar = "?/><][}{|!@#$%^&*()_-+=";
var numeric = "0123456789";
var password = "";
var passLength;
// Create prompt "Please choose between 8 and 128 characters for your password"
function setPasswordLength() {
  var passLength = prompt(
    "Please choose between 8 and 128 characters for your password"
  );
  if (isNaN(passLength)) {
    alert("Needs to be a number between 8 and 128 characters");
    setPasswordLength();
  } else if (passLength < 8 || passLength > 128) {
    alert("Please choose between 8 and 128 characters for your password");
    setPasswordLength();
  }
  return passLength;
}
// Create your variables and confirm them 
var randomize = function () {
  var pLength = setPasswordLength();
  var lowercases = confirm(
    "Would you like lowercase letters in your password?"
  );
  var uppercases = confirm(
    "Would you like uppercase letters in your password?"
  );
  var specialchars = confirm(
    "Would you like special characters in your password?"
  );
  var numerics = confirm("Would you like numeric characters in your password?");
  // Check that at least one type of character has been selected
  
    var passResult = "";
    
    while (passResult.length ===0){
        
        
      if (specialchars) {
        passResult += specialchar;
      }
      if (numerics) {
        passResult += numeric;
      }
       if(lowercases) {
        passResult += lowercase;
      }
      if (uppercases) {
        passResult += uppercase;
      }
      
      }
    

    //   if(passResult.length > 0){
    //       alert("Success");
    //   }
    //   else if (passResult.length ===0){
    //       alert("Must have at least one character");
    //   }
   
    
    
   
      

      // console.log(passResult);
    
  

  // console.log(passResult);
  var finalPass = "";
  for (let i = 0; i < pLength; i++) {
    finalPass += passResult[Math.floor(Math.random() * passResult.length)];
  }
  return finalPass;
}
