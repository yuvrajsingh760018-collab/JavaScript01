// An IIFE is a function that runs immediately after it is defined.
//iife stands for immediately invoked function expression 

// syntax :(function (){

// })()

// 1.example of unnammed iife
(() =>{
    console.log("hii ");
})();

// 2.example of named iife
(function aurcode(){
    console.log(`DB file connected`);
})();

//3.example of parameter db file 
(function (name) {
  console.log("Hello " + name);
})("Yuvraj");

for (var i = 0; i < 3; i++) {
  console.log(i);
}
console.log(i); // 3  ❌ (leaks outside)

