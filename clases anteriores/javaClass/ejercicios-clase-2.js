// 1. Escriba una function que escriba un número a la inversa
let num = 5967
function invertirNum(num){
  console.log(num.toString().split('').reverse('').join(''))
};
console.log(num);
console.log(invertirNum(num));

// 2. Escriba una function que acepte un string como parámetro y convierta cada primer letra de cada palabra en mayúscula
const stringCapital = 'i will study more javascript, i promise teacher';
const arr = stringCapital.split(" ");
for (var i = 0; i < arr.length; i++) {
  arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
};
const stringCapital2 = arr.join(" ");
console.log(stringCapital2);