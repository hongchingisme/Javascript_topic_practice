function position(ABC) {
  if (ABC.length == 0) {
    return false;
  }
  for (let i = 0; i < ABC.length; i++) {
    if (ABC[i] == ABC[i].toUpperCase()) {
      return ABC[i] + " " + i;
    }
  }

  return -1;
}

console.log(position("absd"));
