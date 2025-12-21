var c = 300 // global scope 
// let a = 10
// const b = 20
// var c = 30
// console.log(a) // 10
// console.log(b) // 20
// console.log(c) // 30

// scope means{

//}

// jo  kuch bhi likha ho wo global scope hota hai 

// global and local scope 

if(true){
    let a = 10 // block scope
    const b = 20
    var c = 30

}

//console.log(a) // here a is not define kyuki block scope 
//console.log(b) // b is not define 
console.log(c)


let d = 1440

if(true){
    let c = 500 
    let d = 40
    console.log(d) // method scope ke andr joo d ki value hai wo print hogi
}

console.log(d)// global scope mai d ki value print hogi