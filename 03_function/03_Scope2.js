function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    console.log(website);// website not define 

    two()
}
one()


// in side loop
if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = "youtube"
        console.log(username + website);
    }
    console.log(website);   // error : wensite is not define 
}
console.log(username);// error username is not define 



//++++++++++++++++++++important+++++++++++++++++++++++

function addone(num){
    return num +1
}
addone(5)
// 
console.log(addone(5))
function addone(num){
    return num + 1
}


addTwo(5) //Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}


