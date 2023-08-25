// let calcresult = document.getElementById("calcresult");
// let plus = document.getElementById("plus");
// let minus = document.getElementById("minus");
// let kopaytiruv = document.getElementById("ko'paytiruv");
// let boluv = document.getElementById("bo'luv");
// function calcCalculater() {
//   for (i = 0; i <= calcresult.innerText; i++) {
//     let a = i;
//     console.log(a);
//   }
//   switch (calcCalculater) {
//     case plus:
//       a + b;
//       break;
//     case minus:
//       a - b;
//       break;
//     case kopaytiruv:
//       a * b;
//       break;
//     case boluv:
//       a / b;
//       break;
//   }
// }
// let result = calcCalculater();
// console.log(result);

let a = prompt();
let b = prompt();
let resultcalc = prompt("operator (%,/,+,*,-)");
switch (resultcalc) {
  case "+":
    prompt(a + b);
    break;
  case "-":
    prompt(a - b);
    break;
  case "*":
    prompt(a * b);
    break;
  case "/":
    prompt(a / b);
    break;
  case "%":
    prompt(a % b);
    break;
}
document.write(resultcalc);
