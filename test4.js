function isAllUpperCase(ABC) {
  if (ABC.length == 0) {
    return false;
  }
  for (let i = 0; i < ABC.length; i++) {
    if (ABC[i] != ABC[i].toUpperCase()) {
      return false;
    } else if (ABC == ABC.toUpperCase()) {
      return true;
    }
  }
}

console.log(isAllUpperCase("ABCD")); // returns true
console.log(isAllUpperCase("")); // returns false
console.log(isAllUpperCase("ABCDEFGHIJKLm")); // returns false
