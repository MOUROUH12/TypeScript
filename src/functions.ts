//?_________________________________Function Return Type________________________________________
function add2(n1: number, n2: number): number { //here we specified explicity the returned type 
    return n1 + n2 ;
}
//! void = fx returns nothing
function printResult(num: number): void{
    console.log('Result : ',num) ;
}
// undefined = if u want to return an undefined value  //!(rare case)
function test(num: number): undefined{
    console.log('tseting : ',num) ;
    return;
}
//!Good practice : let typescript do this  

//?_____________________________Function type__________________________assign a fx to variable 
let combineValues1: Function ; //type of Function
combineValues1 = add2 ; //storing add function in combineValues 
// console.log(combineValues1(9,20));

//efficient way 
let  combineValues2: (a: number, b:number) => number ;  //function type defenition  // combineVlaues2 can hold any function of this type
combineValues2 = add2 ;
// console.log(combineValues2(94,20));


//?____________________Callback functions_________________________________________________________
function addHandele(a: number, b: number, cb: (num: number) => void) {
    const result = a + b ;
    cb(result) ;
}
addHandele(20,10,(result) => {console.log(result)})