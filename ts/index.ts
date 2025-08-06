let x: number = 1; //defining in typescript

console.log(x);

function greets (firstName : String){
    console.log(`Hello ${firstName}`)
}

greets("Dipsha");

function sum ( a : number,b :number): number//return type
{
     return a + b
}
let ans = sum(2,4) ;
console.log(ans);

function isLegal(age : number): boolean{
  if(age > 18)
    return true
  else
    return false
}
console.log(isLegal(0));

//to give a function as a argument in a ts and void represent  the type the function would return can be int also
function delayedCall(fn : () => void){
  setTimeout(fn,1000);
}

delayedCall(function(){
  console.log("hello")
})