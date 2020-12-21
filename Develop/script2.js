// Assignment Code
var generateBtn = document.querySelector("#generate");
var onlyUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var onlyLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var onlySpecial = ['#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '['];
var onlyNumeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;

var possibleOptions = [];

//Function used to determine the length of the password
function determineLength() {
    passwordLength = prompt("Choose how many characters you'd like your password to be (between 8-128 characters?");

    if (passwordLength < 8 || passwordLength > 128) {
        alert("Password length must be a number between 8-128 characters");
        determineLength();

    } else if (isNaN(passwordLength)) {
        alert("Password length must be a number between 8-128 characters");
        determineLength();
    } else {
        alert("The next three screens will ask you what types of characters you would like to be included in your password. Must choose at least one the of next 3 criterias");
    }
    return passwordLength;
}

//Function used to determine whether the user wants to include uppercase characters in the password
function determineUppercase() {
    uppercaseCheck = confirm("Do you want to include uppercase letters?");
    if (uppercaseCheck === true) {
        possibleOptions = possibleOptions.concat(onlyLower, onlyUpper);
        console.log(possibleOptions);
    } else if (uppercaseCheck === false) {
        possibleOptions = possibleOptions.concat(onlyLower);
        console.log(possibleOptions);

    }
}

//Function used to determine whether the user wants to include numbers in the password
function determineNumbers() {
    numberCheck = confirm("Do you want to include numbers in your password?");
    if (numberCheck) {
        possibleOptions = possibleOptions.concat(onlyNumeric)
        console.log(possibleOptions);
        // } else if (!numberCheck) {
        //     possibleOptions = possibleOptions.concat(onlyUpper, onlyLower)
        //     console.log(possibleOptions)
    }
    //Function used to determine whether the user wants to include special characters in the password
}
function determineSpecial() {
    specialCheck = confirm("Do you want to include special characters in your password?");
    if (specialCheck) {
        possibleOptions = possibleOptions.concat(onlySpecial)
        console.log(possibleOptions);
        //     } else if (!specialCheck) {
        //         possibleOptions = possibleOptions.concat(onlyUpper, onlyLower, onlyNumeric)
        //         console.log(possibleOptions2)
        // }
    }
}

//Function used to take all the input from the previous functions and generate a password using a random number generator and 
//the charAt method 
function generatePassword() {
    console.log(possibleOptions);
    possibleOptions = [];
    determineLength();
    console.log(passwordLength);
    determineUppercase();
    determineNumbers();
    determineSpecial();
    var finalPassword = [];

    // Conditional statementElse if for 4 negative options to return to determine the length
    //  to check if user does not include any types of characters. 
    if (!specialCheck || !uppercaseCheck || !numberCheck) {
        alert("Must select at least one criteria");
        return;
    }
    else for (let i = 0; i < passwordLength; ++i) {
        var randomPicker = Math.floor(Math.random() * Math.floor(possibleOptions.length));
        finalPassword.push(possibleOptions[randomPicker])
    }
    console.log(finalPassword);

    var superFinal = finalPassword.join('');
    console.log(superFinal);
    //document.getElementById("textarea").textContent = superFinal
    return superFinal;
    // console.log(possibleOptions2);

    // console.log(possibleOptions1);
    // Add math random function


}
//
// Write password to the #password input
function writePassword() {
    var finalPassword = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = finalPassword;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
