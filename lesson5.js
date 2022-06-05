let x = 2.8, y = 7.3;
console.log(x-y);

let x = "2.8", y = 7.3;
console.log(x-y);

let x = true, y = null, z = undefined;
console.log(-x);    // -1
console.log(-y);    // -0
console.log(-z);     //NaN
console.log(typeof -x, typeof -y, typeof -z);

let x = "4", y = "не число", z = true, t = null, u = undefined;
console.log(typeof +x, typeof +y, typeof +z, typeof +t);
console.log(+x, +y, +z, +t, +u);

console.log(5+"6");
console.log("6"+10);
console.log("6.46"+10);
console.log(-2+"1.3");

console.log( 5 % 2 ); // 1, остаток от деления 5 на 2
console.log( 8 % 3 ); // 2, остаток от деления 8 на 3
console.log( 6 % 3 ); // 0, остаток от деления 6 на 3

let counter = 2, cnt = 5;
counter++; // работает как counter = counter + 1
cnt--; // работает как cnt = cnt - 1
console.log( counter, cnt ); // 3, 4

let a, b, c = 10, d = 10;
a = c++;
b = ++d;
console.log( a, b, c, d );