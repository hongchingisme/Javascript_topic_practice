let arr = [0, 1];
function fib(n) {
  for (let i = 0; i < arr.length; i++) {
    let b = i + 1;
    let a = arr[i] + arr[b];
    arr.push(a);
    if (arr[n] == a) {
      console.log(a);
      return;
    } else if (n == 0) {
      console.log(0);
      return;
    }
  }
}

fib(0);
