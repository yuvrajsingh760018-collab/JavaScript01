const newNumbers = [1,2,3,4,4,5,6,7,8,9,10];
const newms = newNumbers.map((num)=> num + 10);

/// we can use the map more than one and afterward we can apply the channing methods
// executing the multiple method at the ssame time is known as chaning 

const news = newNumbers
               .map((num) => num *10)
               .map((num)=>num/2)
               .filter((num) => num>=40);// known as channing 
console.log(news);