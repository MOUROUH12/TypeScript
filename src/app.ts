//?______________unknown___________________________better than any_____add extra check
let userInput: unknown; //if it's any u will have no issue when do userName = userInput
let userName: string;
userInput = 5;
userInput = "John";

if (typeof userInput === "string") {
  userName = userInput;
}
//?__________________never type________________can functions return_________________
//never retun anything

//this will never return anything
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}
console.log(generateError("An error occured !", 400));

console.log("watching mode");
