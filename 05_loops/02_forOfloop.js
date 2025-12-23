// High Order Arrays Loop
//["","",""]
//[{},{},{}]

// 1.  for of 

// syntax:
// for(const iteratble of object ){
    
// }

// exapmle of for of loop

// const arr = [1,2,3,4,5]
// for(const nums of arr){
//     console.log(nums);
// }


// // output 
// 1
// 2
// 3
// 4
// 5


// on string 
const greeting = "hello World!"
for(const greet of greeting){
    console.log(greet);
}

const greeting2 = "hello World!"
for(const greet in greeting2){
    console.log(greet);
}