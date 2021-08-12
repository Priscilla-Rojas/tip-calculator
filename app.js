let buy = document.getElementsByClassName('buy')[0];
let numberPerson = document.querySelector('.number-person');
let porcentajePropina = document.querySelectorAll('.porcentje-button');  
let pay = document.getElementsByClassName('pay')[0];
let personPay = document.querySelector('.person-pay');
let reset = document.querySelector('.reset');

console.log(porcentajePropina)
function calculoPropina(total, porcentaje){
    let propinaPorcentaje = (total * porcentaje) / 100;
    return propinaPorcentaje;
}
function totalPersona(total, personas){
    let  calculo = total / personas;
    return calculo
}
for (let i = 0; i < porcentajePropina.length; i++) {
    porcentajePropina[i].addEventListener('click', ()=>{
        let porcentaje;
        if(numberPerson == ''){
            if(i == 0){
                porcentaje = porcentajePropina[i].value[0];
            }else{
                porcentaje = porcentajePropina[i].value[0];
                porcentaje += porcentajePropina[i].value[1]
            }
            pay.placeholder = calculoPropina(buy.value, porcentaje);
            reset.style.backgroundColor ="#26c0ab";
        }else{
            if(i == 0){
                        porcentaje = porcentajePropina[i].value[0];
                    }else{
                        porcentaje = porcentajePropina[i].value[0];
                        porcentaje += porcentajePropina[i].value[1]
                    }
                    pay.placeholder = calculoPropina(buy.value, porcentaje);
                    reset.style.backgroundColor ="#26c0ab";
                    // mostrar en display
                    let numberPersons = numberPerson.value;
                    personPay.placeholder = totalPersona(pay.placeholder, numberPersons);
                
                    if(personPay.placeholder == Infinity) {
                        personPay.placeholder = totalPersona(pay.placeholder, 1);
                    }else if(isNaN(personPay.placeholder)){
                        pay.placeholder = buy.value;
                        personPay.placeholder = totalPersona(pay.placeholder, numberPersons);
                    }
        }
    })
}

numberPerson.addEventListener('keyup', ()=>{
    let numberPersons = numberPerson.value;
    personPay.placeholder = totalPersona(pay.placeholder, numberPersons);

    if(personPay.placeholder == Infinity) {
        personPay.placeholder = totalPersona(pay.placeholder, 1);
    }else if(isNaN(personPay.placeholder)){
        pay.placeholder = buy.value;
        personPay.placeholder = totalPersona(pay.placeholder, numberPersons);
    }

})
reset.addEventListener('click', ()=>{
    personPay.placeholder = '$0.00';
    pay.placeholder = '$0.00';
    buy.value = '';
    numberPerson.value = '';
    reset.style.backgroundColor ="#0D686D";
})