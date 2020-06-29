/*
## JavaScript Algorithms and Data Structures Projects:

### Telephone Number Validator

Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

telephoneCheck("555-555-5555") should return a boolean.
telephoneCheck("1 555-555-5555") should return true.
telephoneCheck("1 (555) 555-5555") should return true.
telephoneCheck("5555555555") should return true.
telephoneCheck("555-555-5555") should return true.
telephoneCheck("(555)555-5555") should return true.
telephoneCheck("1(555)555-5555") should return true.
telephoneCheck("555-5555") should return false.
telephoneCheck("5555555") should return false.
telephoneCheck("1 555)555-5555") should return false.
telephoneCheck("1 555 555 5555") should return true.
telephoneCheck("1 456 789 4444") should return true.
telephoneCheck("123**&!!asdf#") should return false.
telephoneCheck("55555555") should return false.
telephoneCheck("(6054756961)") should return false
telephoneCheck("2 (757) 622-7382") should return false.
telephoneCheck("0 (757) 622-7382") should return false.
telephoneCheck("-1 (757) 622-7382") should return false
telephoneCheck("2 757 622-7382") should return false.
telephoneCheck("10 (757) 622-7382") should return false.
telephoneCheck("27576227382") should return false.
telephoneCheck("(275)76227382") should return false.
telephoneCheck("2(757)6227382") should return false.
telephoneCheck("2(757)622-7382") should return false.
telephoneCheck("555)-555-5555") should return false.
telephoneCheck("(555-555-5555") should return false.
telephoneCheck("(555)5(55?)-5555") should return false.
123456
function telephoneCheck(str) {
  return true;
}

telephoneCheck("555-555-5555");


/**
* Your test output will go here.
*/

function telephoneCheck(str) {
  // Flags
  let lengthCheck = false;
  let countryCheck = false;
  let singleBracketCheck = true;
  let otherCharacter = true;
  let extremeCharacter = true;

  // Basic Cleaning
  let newStr = str.replace(/[^0-9]/gi,'');
  // console.log("newStr:" + newStr);
  // *** Checks ***
  // Length
  // console.log("newStr.length:" + newStr.length);
  if (newStr.length == 10 || newStr.length == 11) {
    lengthCheck = true;
  }
  // console.log("lengthCheck: " + lengthCheck);
  // Country Code
  // console.log(newStr.length);
  // console.log(newStr[0]);
  if (newStr.length == 11 && newStr[0] == 1) {
    countryCheck = true;
  } else if (newStr.length == 10) {
    countryCheck = true;
  }
  // console.log("countryCheck: " + countryCheck);
  // Single Bracket Check
  let openB = /\(/gi;
  let closeB = /\)/gi;
  //console.log("Str: " + str);
  //console.log("Open Bracket: " + openB.test(str));
  //console.log("Closing Bracket: " + closeB.test(str));
  if (openB.test(str) && !closeB.test(str)) {
    singleBracketCheck = false;
  } else if (!openB.test(str) && closeB.test(str)) {
    singleBracketCheck = false;
  }
  // Characters other than Bracket and Hyphen
  let otherChar = /\?/gi;
  if (otherChar.test(str)) {
    otherCharacter = false;
  }
  // Characters like (- in opening or end
  let beginQues = /\b\(/;
  let endQues = /\)\b/;
  let beginHyp = /\b-/;
  let endHyp = /-\b/;

//  console.log("beginQues.test(str): " + beginQues.test(str));
//  console.log("endQues.test(str): " + endQues.test(str));
//  console.log("beginHyp.test(str): " + beginHyp.test(str));
//  console.log("endHyp.test(str): " + endHyp.test(str));

  if (beginQues.test(str) || endQues.test(str) || beginHyp.test(str) || endHyp.test(str)) {
    extremeCharacter = false;
  }
  // Final Check
  console.log("lengthCheck: " + lengthCheck);
  console.log("countryCheck: " + countryCheck);
  console.log("singleBracketCheck: " + singleBracketCheck);
  console.log("otherCharacter: " + otherCharacter);
  console.log("extremeCharacter: " + extremeCharacter);

  if (lengthCheck && countryCheck && singleBracketCheck && otherCharacter && extremeCharacter) {
    return true;
  }
  return false;
}

telephoneCheck("-1 (757) 622-7382")
