// form the user the number of products are added in the cart
function calculateCartPrice(num1){// here the number of parameter is one 
    return num1;

}
console.log(calculateCartPrice(2)); // and passing the only one argument here 

// but what if the number of parameter is one and agument will more than one 
// then the output will be the first agument of the given n number of argument 

console.log(calculateCartPrice(100,200,3000));

//to sollve this problem we use rest operator(...) threee dot
// basically the rest opertor and the spred operator are same it depend on the usecase 
// use case ke hisab se hm kahi ishko spread and rest operator bolte hai


// program using the rest operator 
function addItemTocart(...num){ // here thriple dot are used to indicate the rest operator
    return num;

}

console.log(addItemTocart(2,3,4));// return a array 


// next program 
function addItemTtoCarts(val1,val2,...nums2){
    return nums2;

}
console.log(addItemTtoCarts(2,3,4,5)); // output [4,5] bcz val1 = 2,val2 = 3

// next program'

function addItem(val1, val2,...num3){
    return num3;
}
console.log(addItem(1,2,3,4,5));

// creating an object

const user ={
    username : "hitesh",
    price : 199
}

// how to pass object inside the function

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)

}
handleObject(user);

handleObject({
    username:"sam",
    price : 399

})


// passing array in funaction 
const myNewArray = [200,300,400,30000,5]

function returnSecondValue(getArray){
    return getArray[1];

}
//console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200,300,400,30000,5]));