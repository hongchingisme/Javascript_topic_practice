function addUpTo(n) {
  let a = n;
  for (let i = n; 0 < i; i--) {
    a = a + i - 1;
  }

  return a;
}

console.log(addUpTo(50));

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    console.log(i, j);
  }
}
