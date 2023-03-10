function findBiggest(nub) {
  let n = nub[0];

  for (let i = nub.length - 1; i >= 0; i--) {
    if (n < nub[i]) {
      n = nub[i];
    }
  }

  return n;
}

console.log(findBiggest([50, 77, 88, 500, 22, 15000, 90, 87, 8000, 700, -500]));
