// array declaration and intialization in javasciprt 
const myArr = [0,1,2,3,4,5]
console.log(myArr[0]); // accessing the element of array 

// second way of intializing the array is 
const myArr2 = new Array(1,2,3,4)
console.log(myArr2[0]); // 1

//1. Array method 
// (arrname).push method to push or add the element at the last of the index 

myArr.push(6);
console.log(myArr);

// 2.
//(arrayName).pop() // to remove the element from the last of the index 
// no need to pass the parameter 
myArr.pop();
console.log(myArr);

// 3.
//(Arrname).unshift(parameter)
myArr.unshift(9);
console.log(myArr);// add the element at the 0 index and shift all the element by 1 


//4.
//(Arrname).shift(paramerter);
myArr.shift(); // remove the element from the begining of the array 
console.log(myArr);

//5.
//question method 
console.log(myArr.includes(9));// return true and false 
// it check the given number is present in the given array or not 

// 6/
console.log(myArr.indexOf(9));
console.log(myArr.indexOf(3));

// important 

const newArr22 = [0,1,2,3,4,5];
const newArrr2 = newArr22.join();
console.log(newArr22);
console.log(newArrr2);// join ke wajah se array jo hai ushko biind  kr diya hai aur ushko string mai change kr diya hai 
console.log(typeof newArrr2);


// very important 

// 1//sice//

const yuvi = [0,1,2,3,4,5,6];
console.log("A", yuvi);

const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("B",myArr);


/// 2///
//splice//

const yuvi1 = [0,1,2,3,4,5,6,7];
console.log("A", yuvi1);

const myn2 = yuvi1.splice(1,3);
console.log(myn2);
console.log("b", yuvi1);

