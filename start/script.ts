const btn = document.querySelector('.btn')!; // (!) tell u developper will not be null 
const num1 = document.querySelector('#num1') as HTMLInputElement;
const num2 = document.querySelector('#num2') as HTMLInputElement;


function add(nbr1: number,nbr2: number){
    return nbr1 + nbr2 ;
}
btn.addEventListener('click',function(){
    console.log(add(+num1.value,+num2.value));
})