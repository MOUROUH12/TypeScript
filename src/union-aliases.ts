// + = parseFloat() 
//?__________________(Union type = | )___________________ number | string | boolean | ...

//!Type alias 
type Combinable = number | string ; //create new type , Camelcase  (union type strored in alias type)
type ConversionDescriptor = 'as-number' | 'as-text'  ; // literal type stored in alias type 
//!literal types
//resultConversion: 'as-number' | 'as-text' 
function combine(
    input1: number | string, //unuin type , //? u can store this in union type & use Combinable
    input2: Combinable, // alias type
    resultConversion: 'as-number' | 'as-text' //literal type ,  //?u can store this in union type & use ConversionDescriptor
    ){
    // const result = input1 + input2 ; //it shows an error underline 
    // return input1 + input2 ;
    // so this how to solve it & it's not required 
    let result: Combinable ;
    if(typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2 ;
    }else {
        result = input1.toString() + input2.toString() ;
    }
    
    return result ;
}
console.log(combine('A','B','as-text'));