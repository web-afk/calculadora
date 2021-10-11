let input = document.querySelector(".datos-texto");
let clear = document.querySelector(".clear");
let equal = document.querySelector(".equal");
let firstvalue = 0;
let resultado;

let numbers = [...document.querySelectorAll('.number')];

let operations = [...document.querySelectorAll('.sign')];

let signs = ['+','/','-','*','√'];

numbers.forEach(number=>{
    number.addEventListener('click',()=>{
        whatPosition(number);
    });
});

operations.forEach(operation =>{
    operation.addEventListener('click',()=>{
        firstValue();
        whatPosition(operation);
    });
});

clear.addEventListener("click", () => {
    input.value = "";
});

equal.addEventListener("click", ()=>{
    secondValueAndResponse();
});

function whatPosition(number){
    input.value += number.textContent;
}

function firstValue(){
    if(input.value.length > 0){
        firstvalue = parseFloat(input.value,10);   
    }
    else{
        firstvalue = 2;
    }
}

function secondValueAndResponse(){
    let index;
    let secondvalue = 0; 
    let operation;
    let resource = input.value;

    signs.forEach(sign=>{
        if(input.value.includes(sign)){
            console.log(`sign ${sign} found`);
            index = input.value.indexOf(sign);
            secondvalue = parseFloat(input.value.slice(index + 1,),10);
            operation = sign;
        }
    });

    switch(operation){
        case '+':
            resultado = firstvalue + secondvalue;
            break;
        case '-':
            resultado = firstvalue - secondvalue;
            break;
        case '*':
            resultado = firstvalue * secondvalue;
            break;
        case '/':
            resultado = firstvalue / secondvalue;
            break;
        case '√':
            resultado = Math.pow(secondvalue,1/firstvalue);
        default:
            resultado = resource;
            alert('there must be a operation');
    }
    if(isNaN(resultado)){
        alert('invalid operation');
        resultado = resource;
    }
    input.value = resultado;
};