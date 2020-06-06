function palindrome(str) {
  let proStr = str.replace(/[\W_]/gi, '').toLowerCase();
  let revStr = proStr.split("").reverse().join("");
  if (proStr === revStr) {
      return true;
  }
    return false;
}

console.log(palindrome("eye"));
