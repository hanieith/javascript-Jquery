let a = true;
a = String(a);
console.log(a);
console.log(typeof a);

let a = "123";
let b = Number(a);
console.log(typeof b);

console.log("6" / "3");
console.log("6" + "3");
console.log(6 + "3");
console.log(6 + 3);
a = Number(a);


console.log(Number("  123  "));
console.log(Number("123z"));
console.log(Number(true));
console.log(Number(false));

console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean("0"));
console.log(Boolean("Hello"));
console.log(Boolean(""));

let age = promt('How old are you?', 18);
console.log(age);

let isCar = confirm("Do you have a car?");
console.log(isCar);