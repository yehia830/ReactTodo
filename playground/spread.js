// function add(a,b,c) {
//   return a + b + c;
// }
// //
// // console.log(add(3,1));
//
// var toAdd = [9,5,1];
//
// console.log(add(...toAdd));

// var groupA = ['jen', 'Corey'];
// var groupB = ['Vik'];
// var final = [...groupB,3,...groupA];
// console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function greeting(name,age) {
    console.log('Hi '+name +', you are ' + age);
}

greeting(...person);

var names = ['Mike', 'Ben'];
var final = [...names,'Yehia'];

final.forEach(function(name) {
console.log("Hi " + name);
})
