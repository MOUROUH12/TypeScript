var btn = document.querySelector('.btn');
var num1 = document.querySelector('#num1');
var num2 = document.querySelector('#num2');
function add(nbr1, nbr2) {
    return nbr1 + nbr2;
}
btn.addEventListener('click', function () {
    console.log(add(+num1.value, +num2.value));
});
