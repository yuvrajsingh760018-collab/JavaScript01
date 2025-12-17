const score = 400
console.log(score)

const balance  = new Number(100)
console.log(balance)
console.log("converting it into he string ");

console.log(balance.toString()); // 100 (as a string 100)
console.log(balance.toString().length);// length of the string


console.log("use of precision method ");
const other_number = 123.8966
console.log(other_number);
console.log(other_number.toPrecision);// function : to presion 
console.log(other_number.toPrecision(3));// 124


const hunderds = 1000000
console.log(hunderds.toLocaleString());
console.log(hunderds.toLocaleString('en-IN'));

//*****************Maths**************************

console.log("maths:");

console.log(Math.abs(-4)); // 4 // abs stand for absolute value 
console.log(Math.round(3.9)); // round off method gives //4 
console.log(Math.min(1,2,3,4,5)); // gives min value from the arry
console.log(Math.max(1,2,3,4,5,6,7,8));// gives max value from the array
console.log(Math.ceil(4.2));// provide the ceiling value of the givern decimal number 
console.log(Math.floor(4.2));// provide the flooe value of the given number 

console.log("important");

console.log(Math.random());
//console.log(Math.floor(Math.randon() *10) +1) // to avoid 0.04..
console.log((Math.floor(Math.random() * 10))+1); // to avoid 0.04..

const min = 10;
const max = 20;
console.log("printing the value which lies in between 10 and 20");
console.log("important formula");
console.log(Math.floor(Math.random() * (max-min + 1)) + min);









