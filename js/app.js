let input = document.querySelector(".datos-texto");
let clear = document.querySelector(".clear");
let raiz = document.querySelector(".raiz");
let multi = document.querySelector(".multi");
let divi = document.querySelector(".dividir");
let uno = document.querySelector(".uno");
let dos = document.querySelector(".dos");
let tres = document.querySelector(".tres");
let cuatro = document.querySelector(".cuatro");
let cinco = document.querySelector(".cinco");
let seis = document.querySelector(".seis");
let siete = document.querySelector(".siete");
let ocho = document.querySelector(".ocho");
let nueve = document.querySelector(".nueve");
let cero = document.querySelector(".cero");
let equal = document.querySelector(".equal");
let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
let firstvalue = 0;
let resultado;

let numbers = [uno,dos,tres,cuatro,cinco,seis,siete,ocho,nueve,cero];

let operations = [raiz,multi,divi,plus,minus];

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