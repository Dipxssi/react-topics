/*
interface User {
  name : string;
  age: number;
}

function sumOfAge(user1 : User , user2: User){
  return user1.age + user2.age;
}

const age = sumOfAge({name: 'Dipsha', age:20},{name : "Titi" , age: 15})

console.log(age);*/

//TS API's

//1)PICK : you can pick a key
//2)PARTIAL: you can use the key 
//3)Readonly: makes inner element of an array or object constant
//4)Records and Maps:
//5) Exclude
//6) type inference of zod : z.infer <typeof zod_name>

interface User {
  id : string;
  name : string;
  age: number;
  email : string;
  password : string
};

type UpdateProps = Pick <User, 'name' | 'age' | 'email'>

type UpdatedPropsOptional = Partial<UpdateProps>

function updateUser(updatedProps:UpdatedPropsOptional ){
   // hits the db yo update user
}

type Me = {
  name : string;
  age: number;
}

const me : Readonly<Me> = {
  name : 'Dipsha',
  age: 20
}

//records

// type UsersAge = {
//   [key : string] : number;
// } OR using record

type Users = Record<string , {age : number ; name : string}>

const users : Users = {
"digers" : {age: 21 , name : "dkjfcsd"},
  "khlste" : {age: 20 , name : "dhjbkllpiu"}
}

//maps : u can sat, get delete on a map

//Exclude 
type EventType = 'click' | 'scroll' | 'mousemove'
type ExcludeEvent = Exclude <EventType, 'scroll'>;
const handleEvent = (event: ExcludeEvent) =>{
  console.log(`Handling event : ${event}`)
}

handleEvent('click')
//handleEvent('scroll') ---> error

