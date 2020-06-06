/*
SYMBOL       VALUE
I             1
IV            4
V             5
IX            9
X             10
XL            40
L             50
XC            90
C             100
CD            400
D             500
CM            900
M             1000
*/

function convertToRoman(num) {
  let arr = "";
  while (num > 0) {
    arr += highestRoman(num);
    num -= getKeyByValue(translationTable,highestRoman(num));
  }
  console.log(arr);
  return arr;
}

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

var translationTable = {
  "1":	"I",
  "4":	"IV",
  "5":	"V",
  "9":	"IX",
  "10":	"X",
  "40":	"XL",
  "50":	"L",
  "90":	"XC",
  "100":	"C",
  "400":	"CD",
  "500":	"D",
  "900":	"CM",
  "1000":	"M"
}

function highestRoman(n) {
    let arr = [1,4,5,9,10,40,50,90,100,400,500,500,900,1000];
    if (contains(arr,n) != -1) {
      return translationTable[arr[contains(arr,n)]];
    }
    arr.push(n);
    arr.sort(function(a, b){return a - b});
    //console.log(arr.indexOf(6));
    return translationTable[arr[contains(arr,n)-1]];
}

function contains(arr, element) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i;
        }
    }
    return -1;
}

//console.log(highestRoman(4));


convertToRoman(36);

/*
console.log(convertToRoman(2) === "II");
console.log(convertToRoman(3) === "III");
console.log(convertToRoman(4) === "IV");
console.log(convertToRoman(5) === "V");
console.log(convertToRoman(9) === "IX");
console.log(convertToRoman(12) === "XII");
console.log(convertToRoman(16) === "XVI");
console.log(convertToRoman(29) === "XXIX");
console.log(convertToRoman(44) === "XLIV");
console.log(convertToRoman(45) === "XLV");
console.log(convertToRoman(68) === "LXVIII");
console.log(convertToRoman(83) === "LXXXIII");
console.log(convertToRoman(97) === "XCVII");
console.log(convertToRoman(99) === "XCIX");
console.log(convertToRoman(400) === "CD");
console.log(convertToRoman(500) === "D");
console.log(convertToRoman(501) === "DI");
console.log(convertToRoman(649) === "DCXLIX");
console.log(convertToRoman(798) === "DCCXCVIII");
console.log(convertToRoman(891) === "DCCCXCI");
console.log(convertToRoman(1000) === "M");
console.log(convertToRoman(1004) === "MIV");
console.log(convertToRoman(1006) === "MVI");
console.log(convertToRoman(1023) === "MXXIII");
console.log(convertToRoman(2014) === "MMXIV");
console.log(convertToRoman(3999) === "MMMCMXCIX");
*/
