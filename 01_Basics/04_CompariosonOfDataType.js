// comparison operator in javaSciprt
console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);

console.log("hiii");

console.log("2">1); true;// typescript mai do diffrent datatype of comarison krna allow hi nhi hai 
console.log("02">1);true;// but yaha javascipt mai diffrent datatype of comaprison krna allow hai 


console.log("for the null ");

console.log(null>0);// false  *** avoid***
console.log(null == 0);// false 
console.log(null >= 0); // true
// comparison operator convert null to a number treating as zero
//thats why null>= 0 is true and null > 0 is false 

// comaprison operator and double equals both are diffrent in javasciprt 


console.log("for undefined ");

console.log(undefined == 1); // false  ***avoid ***
console.log(undefined>=0);// false
console.log(undefined == 0); // false 
console.log(undefined<0); // false

// ***** strict check *****

//  strict check mai value as well as data type dono check hoti hai 

console.log("for strict check (===)");
console.log("2" == 2); // true;// not a strict check here conversion are take place 
console.log("2" === 2);// false  here 2 is string which is compre with the number 2 type are diffre so it return false
