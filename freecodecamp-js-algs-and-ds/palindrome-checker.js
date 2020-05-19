/*
 * Returns true if the given string is a palindrome. Otherwise,
 * returns false.
 * */
function palindrome(str) {
  str = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
  let isPalindrome = true;
  for(let i = 0; i < str.length / 2; i++) {
    if(str[i] != str[str.length - i - 1]){
      isPalindrome = false; i = str.length / 2;
    }
  }
  return isPalindrome;
}

console.log(palindrome("My age is 0, 0 si ega ym."));
