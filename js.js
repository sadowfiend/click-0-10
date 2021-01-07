const minus = document.getElementById('btnMinus');
const plus = document.getElementById('btnPlus');
let num = document.getElementById('number');
let counter = 0;

minus.addEventListener('click', function () {
    if (counter === 0){
        return counter > 0
    }
    counter -=1;
    num.textContent = counter

});

plus.addEventListener('click', function () {
    if (counter === 10){
        return counter > 0
    }
    counter +=1;
    num.textContent = counter

});