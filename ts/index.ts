/*let x: number = 1; //defining in typescript

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
})*/

//how would you give a type to an object?

/*
function greet(user :{
  name : string,
  age: number
}){
  console.log("Hello "+user.name)
}

let user = {
  name : "dipsha",
  age : 20
}

greet(user);*/

//INTERFACE
/*
let firstname : string = "dipsha"
let age : number = 20

interface UserType {
  firstname : string,
  lastname : string,
  age : number
}

function greet(user:UserType){

}
let user : UserType = {
  firstname : "dipsha",
  age : 20,
  lastname : "das"
}*/
/*
type k = string | number;

function sum2(a : k , b:k){
  console.log((a as any)+ (b as any));
}

sum2(4,6)

//interface : defining custom types

interface Address{
   city : string;
   country : string;
   pincode : number;
   houseNumber : string
}

interface User {
  name: string,
  age : number,
  /*address ?:{ //to make it optional can exist or not
    city : string;
    country : string;
    pincode : number;
  }
  address : Address
}

interface Office {
   address : Address
}

let user : User = {
  name : "dipsha",
  age: 20,
  address : {
    city : "Bengaluru",
    country : "India",
    pincode: 560100,
    houseNumber : "123"
  }
}

function isLegal(user :User) :  boolean {
  if (user.age  >= 18){
    return true
  } else {
    return false
  }
}

console.log(isLegal(user))

interface People {
  name : string,
  age : number ,
 // greet : () => string // greet2(): string [same meaning]
}
//interface ka obj
let person : People = {
   name : "dipsha",
   age :  20,
  // greet : () =>{
    //return "hi"
   //}
}

//let greeting = person.greet()
//console.log(greeting)

//class implementing  the interface People [ln:125]

class Manager implements People{
   // name: string;
    //age : number;
  constructor( public name:string ,public age: number){
   // this.name = name;
    //this.age = age;
  }
}

let u = new Manager("John", 30)
console.log(u.name); */

//abstract class is like a bluprint
/*
abstract class User {
  name : string;
  constructor(name : string){
    this.name = name;
  }
  abstract greet():string;
  hello(){
    console.log("hi there");
  }
}

class Employee extends User {
  name : string;
  constructor(name : string){
    super(name)
    this.name = name;
  }
  greet(){
    return "hi" + this.name
  }
}

const emp = new Employee('dipsha');
console.log(emp)*/

//TYPES : type mai = lag ta hai pr interface mai nhi, u can do unions and intersections

/*
interface User2{
  name : string
}
type User = {
  name: string;
  age : number
}

function isLegal (user : User){
  return user.age > 18
}*/

//INTERSECTION
/*
type Employee = {
  name : string;
  startDate: Date;
};

type Manager = {
  name : string;
  department : string;
};

type TeamLead = Employee & Manager

let e : Employee = {
  name : "dipsha",
  startDate : new Date("2025-08-01")
}
let m: Manager = {
  name : "dipsha",
  department : "Electric"
}
let t : TeamLead = {
  name : "dipsha",
  startDate : new Date("2025-08-01"),
  department : "Electric"
}*/

//UNION : yeah toh yea ho ya toh woh yea toh sab
/*
type GoodUser = {
  name : string;
  gift : string; 
}

type BadUser = {
  name : string ;
  ip : string;
}

type User = GoodUser | BadUser;

const user : User = {
  name : "dipsha",
  ip : "asdasad",
  gift: "12345"
}*/

//INTERFACE VS TYPES
/*
interface Admin {
  name : string,
  permissions : string;
}

interface User {
  name : string;
  age : number;
}

function greet(user : User | Admin){
  return `Hi ${user.name}`
}
  
console.log(greet({
  name : "dipsha",
  age: 20
}))*/

//Arrays as a type
function getMax(nums : number[]):number{
  let maxValue = -10000000;
  for (let i = 0 ; i < nums.length ; i++){
    if (nums[i] !> maxValue){
    maxValue = nums[i]!;
  }
}
return maxValue
}
console.log(getMax([1,2,3]))

interface User {
  firstName : string;
  lastName : string;
  age : number;
}
function filterUsers(users : User[]){
  return users.filter((user) => user.age > 18);
}