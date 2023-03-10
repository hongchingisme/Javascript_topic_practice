function reverse(a) {
  let n = "";
  for (let i = 0; i < a.length; i++) {
    n += a[a.length - 1 - i];
  }
  return n;
}

console.log(reverse("I am a good guy."));
