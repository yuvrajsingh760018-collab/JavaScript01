const array1 = [1,2,3,4];
// 0+1+2+3+4
const initialvalues = 0;
const sumWithInitial = array1.reduce(
    console.log(`acc:${accumulator}, currvalue:${currentValue}`)
    (accumulator,currentValue)=> accumulator + currentValue,initialvalues 

    // note 1 . pahle accumulator mai initial value jayega (yaha pr intial value 0 hai )
    // not 2 => ushke baad accumulator mai accumulator + currentValue  ka sum jayega ( 0 + 1)
    // ab accumulator mai 1  jayega 
    // phir accumulator se 1 + 2 (current value ) ka sum hoga phir ye value accumultor ko jayega 
    // yaha phir se accumulator mai 3 aayega 

);

console.log(sumWithInitial);

const myNums = [1,2,3]
const myTotal = myNums.reduce(function(acc, Currvale){
    console.log(`acc:${acc} and current :${Currvale}`);
    return acc + Currvale
},0)

console.log(myTotal); 

const shopingCart = [
    {
        itemName :"js course",
        price : 3000    
    },

    {
        itemName :"java course",
        price : 2000    
    },

    {
        itemName :"mobile dev course",
        price : 5999    
    },

    {
        itemName :"data science course",
        price : 12999   
    },
]

const priceToPay = shopingCart.reduce((acc,item) => acc + item.price,0)      // item denotes kr rha hai array ke andr har ek object ko denote kr rha hai 
console.log(priceToPay);