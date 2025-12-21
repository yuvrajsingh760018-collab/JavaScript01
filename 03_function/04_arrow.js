const user = {
    username : "Yuvraj Singh",
    price : 999,
    age : 19,

    welcomeMesaage : function(){
        console.log(`${this.username} , welcome to the wensite`)
        console.log(this);

    }
}
//user.welcomeMesaage // dont give any output
//user.welcomeMesaage() // Yuvraj Singh , welcome to the wensite

//\JavaScript\03_function\04_arrow.js"

// changing the username value

//user.username = "sam"; //sam , welcome to the wensite 
//bacause the this refer to the sam (username)

//user.welcomeMesaage();

console.log(this);

//*****very important ****
//  */ function ke andr agar this keyword ko print keyword ko print karate hai too tab kya hota hai 
function chai(){
    let username = "Yuvraj Singh "
    console.log(this.username); // output is undefined because this keyword is applicale only on objevct not on functionn

}


/// arrow function 
// const addTwo = (num1,num2) =>{
//     return num1 + num2

// }
//const AddTwo = (num1 ,num2) =>num1+num2 
// implicit arrow function 
const addTwo = (num1 , num2) => (num1 + num2);
console.log(addTwo(3,4))

const aaddTwo = (num1 , num2) => ({username:"hitesh"});

// const myArray = [2,3,5,6,7,8];
// console.log(myArray.forEach(() => {}));

