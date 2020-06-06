/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

var letters = ["A"	, "B"	, "C"	, "D"	, "E"	, "F"	, "G"	, "H"	, "I"	, "J"	, "K"	, "L"	, "M"	, "N"	, "O"	, "P"	, "Q"	, "R"	, "S"	, "T"	, "U"	, "V"	, "W"	, "X"	, "Y"	, "Z"];

function rot13(str) {
  let strArr = str.split("");
  console.log(strArr);
  let newStr = [];
  let reIndex = 0;
  for (let i = 0; i < strArr.length; i++) {
    if (letters.indexOf(strArr[i]) != -1) {
      reIndex = letters.indexOf(strArr[i]) + 13;
//      console.log(reIndex);
      if (reIndex > 25) {
        reIndex = reIndex - 26;
        newStr.push(letters[reIndex]);
      } else {
        newStr.push(letters[reIndex]);
      }
    } else {
      newStr.push(strArr[i]);
    }
  }

  return newStr.join("");
}

//rot13("M");
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
console.log(rot13("SERR YBIR?"));
console.log(rot13("SERR CVMMN!"));
