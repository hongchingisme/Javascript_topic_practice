function findSmallCount(arr, nmb) {
  let a = 0;
  for (let i = 0; i < arr.length; i++) {
    let n = arr[i];
    if (n < nmb) {
      a++;
    }
  }

  return a;
}

console.log(
  findSmallCount([5, 4, 8, 7, 3, 2, 1, 1, 7, 9, 9, 9, 8, 4, 1, 2, 5], 5)
);
