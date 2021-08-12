let buy = document.getElementsByClassName('buy')[0];
let numberPerson = document.querySelector('.number-person');
let porcentajePropina = document.querySelector('.porcentje-button');  
let pay = document.getElementsByClassName('pay')[0];
let personPay = document.querySelector('.person-pay');
let reset = document.querySelector('.reset');

function calculoPropina(total, porcentaje){
    let propinaPorcentaje = (total * porcentaje) / 100;
    return propinaPorcentaje;
}
function totalPersona(total, personas){
    let  calculo = total / personas;
    return calculo
}
porcentajePropina.addEventListener('click', ()=>{
    let porcentaje = porcentajePropina.value[0];
    pay.placeholder = calculoPropina(buy.value, porcentaje);
    reset.style.backgroundColor ="#26c0ab";
})

numberPerson.addEventListener('keyup', ()=>{
    let numberPersons = numberPerson.value;
    personPay.placeholder = totalPersona(pay.placeholder, numberPersons);

    if(personPay.placeholder == Infinity){
        personPay.placeholder = totalPersona(pay.placeholder, 1);
    }

})
reset.addEventListener('click', ()=>{
    personPay.placeholder = '$0.00';
    pay.placeholder = '$0.00';
    buy.value = '';
    numberPerson.value = '';
    reset.style.backgroundColor ="#0D686D";
})