// if statement 

// if(condition){

// }

if(true){
    console.log("code executed successfully");

}

if(false){
    console.log("code will not executes ")
}


// conditional satement : >,<,>=,<=,==,!=,===,!==
// if(2=="2"){
//     console.log("executed"); // output : executed 
// }

// const temp = 41
// if(temp <41){
//     console.log("temperature is lesst than 41");
// }
// else{
//     console.log("temperature is greater than 41");
// }


const score = 200
if(score>100){
    const power ="fly"
    console.log(`user power :${power}`);

}
//console.log(`userr power :${power}`); // output is : power is not defined

let temp = 41
if(temp>30){
    console.log("temprature is greater than 30");
}else if(temp == 41){
    console.log("temperate is greater than 41");
}else{
    console.log("temprature is high :");
}