//!____________________core data types_________________________________
// number , string , boolean, object, array , tuple , enum , any 

//* Javascript uses dynamic types (resolved at runtime) 
//* Typescript uses static tpes (resolved during development)
// the most inmportant thing why w're using typescript is the to detect error before compilation 

function add(n1:number, n2:number) {
    return n1 + n2 ;
}
// here we don't need to specify it will detect it from the assigned value , but if u don't want to initialise the variable then u should specify the type of var 
let number1:number ; //specify the type in case of u're not initialsing  ; 
const number2 = 2.5 ;
number1 = 5 ; 
const result = add(number1,number2) ;
console.log(result) ;

//?_________________Object____________________________________________

//* typescript representation explicit
// const person: {
//     name: string ;
//     age: number;
// } = {
//     name: 'Ahmed',
//     age: 20 
// }
//* ts object
const person =  {
    name: 'Ahmed',
    age: 20 ,
    hobbies: ['sports','cooking']
}
//one of benifits of ts 
for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase()); //ts detects automaticlly that it's about strings so u can use toUpperCase() ;
    // console.log(hobby.map()); //it will not work 
}
//?____________________Arrays_________________________________________



let favoriteActivities:  string[] ; //array of strings  , cannot accept any other data type
favoriteActivities = ['Sports'] ;
let arr: any[] = [1,'test'] ; //mixed array but we lost the benifit of  typescript and u back in js 


//?_____________Tuple____________//I want a special array______________ 
// tuple : fixed-length array & fixed type array except (arr.push())
const animal: {
    name: string;
    age: number ;
    role: [number,string]
} = {
    name: 'Cat',
    age: 1 ,
    role: [2,'playing'] //special array 
}
animal.role.push('swiming') //typescript is not catching this 
//animal.role[1] = 1 ; //typescript is catching this  - it should be string not a number
//animal.role = [10, 'test1', 'test2'] ; //typescript is catching this - it should be 2 items

//?__________________Enum________________________________________________
//automatically enumerated global constat identifiers
enum Role {ADMIN,READ_ONLY,AUTHOR} //{O,1,2} 
//enum Rele {ADMIN= 5,READ_ONLY,AUTHOR} //or u can customize enumerartion {5,6,7}
//enum Rele {ADMIN = 'A',READ_ONLY = 'B',AUTHOR = 'C'} //u can use anthing to enum

const person2 = {
    name: 'John',
    age: 25,
    role: Role.ADMIN 
}
if(person2.role === Role.ADMIN){
    console.log('this is an admin ') ;
}else if(person2.role === Role.AUTHOR) {
    // do somthing
}
//?______________any_____________//u can use any type________ any = * ________
//any kind of value , no specific type assignment
//u should avoid any because u lost the benifit ts 
//use it in case u dont know the type of variables 
let v: any ;
let t: any[] ;
