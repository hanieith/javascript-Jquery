console.log( 2 > 1 );  // true (верно)
console.log( 2 == 1 ); // false (неверно)
console.log( 2 != 1 ); // true (верно)

console.log( 'Я' > 'А' ); // true
console.log( 'Кот' > 'Код' ); // true
console.log( 'Сонный' > 'Сон' ); // true

console.log( true == 1 ); // true (true приводится к 1)
console.log( false == 0 ); // true (false приводится к 0)
console.log( null == undefined ); // true (обе величины приводятся к 0)

console.log( "5" === 5 ); //false
console.log( "7" === 7 ); //false
console.log( null === undefined ); // false

let x = -10, sgn = 0;
if(x < 0) {
         sgn = -1;
         console.log("x отрицательное число", sgn);
}
else if(x > 0) {
         sgn = 1;
         console.log("x положительное число", sgn);
}
else console.log("x равен 0", sgn);

let accessAllowed = (age > 18) ? true : false;

let accessAllowed = age > 18;

let x = 4, y = true, z = false;
if(x) console.log("x = " + x + " дает true");
if(!0) console.log("0 дает false");
if("0") console.log("строка 0 дает true");
if(!"") console.log("пустая строка дает false");
if(y) console.log("y = true дает true");
if(!z) console.log("z = false дает false");

let item = 3;
switch(item) {
         case 1: console.log("item = 1");
         case 2: console.log("item = 2");
         case 3: console.log("item = 3");
         case 4: console.log("item = 4");
         default: console.log("item другое значение");
}

switch(item) {
         case 1: console.log("item = 1");break;
         case 2: console.log("item = 2");break;
         case 3: console.log("item = 3");break;
         case 4: console.log("item = 4");break;
         default: console.log("item другое значение");
}
