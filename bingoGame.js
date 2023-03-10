let a = Math.random() * 100;

let random = Math.ceil(a);

n1 = 0;

n2 = 99;

while (true) {
  let guess = Number(prompt("請輸入你的猜測(" + n1 + "~" + n2 + ")"));

  if (guess < n1 || guess > n2) {
    alert("輸入的數字無效");
    continue;
  }

  if (guess == random) {
    alert("你猜對了，秘密數字是" + random);
    break;
  } else if (guess < random) {
    n1 = guess;
  } else if (guess > random) {
    n2 = guess;
  }
}
