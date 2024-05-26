// var a = 11;
// console.log(a++);

// var b = 11;
// console.log(++b);

// var c = 11;
// console.log(--c);

// var d = 11;
// console.log(d--);

var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
// explain* 1 - 0 + 1 + 1
console.log(result); 
var result = --a - --b + ++b + b-- + --a;
console.log(result); 
var c = 3;
var d = 4;
var result2 = --c + --d - ++c + c-- - d++ + c-- ;
// explain* 2 + 3 - 3 + 3 - 3 + 2:

console.log(result2);

var input = prompt("enter your name");
alert('hello' +' '+ input);
