function stars(nmb) {
  let n = "";
  for (let i = 1; nmb >= i; i++) {
    n += "*";
    console.log(n);
  }
}

stars(4);
