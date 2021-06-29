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

clear.addEventListener("click", () => {
    input.value = "";
})

uno.addEventListener("click", ()=>{
    whatPosition(uno);
})

dos.addEventListener("click", ()=>{
    whatPosition(dos);
})

tres.addEventListener("click", ()=>{
    whatPosition(tres);
})

cuatro.addEventListener("click", ()=>{
    whatPosition(cuatro);
})

cinco.addEventListener("click", ()=>{
    whatPosition(cinco);
})

seis.addEventListener("click", ()=>{
    whatPosition(seis);
})

siete.addEventListener("click", ()=>{
    whatPosition(siete);
})

ocho.addEventListener("click", ()=>{
    whatPosition(ocho);
})

nueve.addEventListener("click", ()=>{
    whatPosition(nueve);
})

cero.addEventListener("click", ()=>{
    whatPosition(cero);
})

raiz.addEventListener("click", ()=>{
    firstValue();
    whatPosition(raiz);
})

multi.addEventListener("click", ()=>{
    firstValue();
    whatPosition(multi);
})

divi.addEventListener("click", ()=>{
    firstValue();
    whatPosition(divi);
})

equal.addEventListener("click", ()=>{
    secondValueAndResponse();
})

minus.addEventListener("click", ()=>{
    firstValue();
    whatPosition(minus);
})

plus.addEventListener("click", () => {
    firstValue();
    whatPosition(plus);
})

function whatPosition(number){
    input.value += number.textContent;
}

function firstValue(){
    if(input.value.length > 0){
        firstvalue = input.value;   
    }
    else{
        firstvalue = 2;
    }
}

function secondValueAndResponse(){
    let index;
    let resultado;
    let secondvalue =0; 
    if(input.value.includes("+")){
        index = input.value.indexOf("+");
        secondvalue = input.value.slice(index + 1, );
        resultado = parseFloat(secondvalue, 10) + parseFloat(firstvalue,10);
        resultado.toString();
        input.value = resultado;
    }
    else if(input.value.includes("-")){
        index = input.value.indexOf("-");
        secondvalue = input.value.slice(index + 1, );
        resultado = parseFloat(firstvalue, 10) - parseFloat(secondvalue,10);
        resultado.toString();
        input.value = resultado;
    }
    else if(input.value.includes("*")){
        index = input.value.indexOf("*");
        secondvalue = input.value.slice(index +1,)
        resultado = parseFloat(firstvalue,10)*parseFloat(secondvalue,10);
        resultado.toString();
        input.value = resultado;
    }
    else if(input.value.includes("/")){
        index = input.value.indexOf("/");
        secondvalue = input.value.slice(index+1,)
        resultado = parseFloat(firstvalue,10) / parseFloat(secondvalue,10);
        resultado.toString();
        input.value = resultado;
    }
    else if(input.value.includes("√")){
        index = input.value.indexOf("√");
        let newOne = 1/parseFloat(firstvalue);
        secondvalue = input.value.slice(index +1,)
        resultado = Math.pow(parseFloat(secondvalue),newOne);
        resultado.toString();
        input.value = resultado;
    }
    else if(input.value.length === 0){
        alert("There must be some operation")
    }
    console.log(firstvalue);
    console.log(secondvalue);
    console.log(resultado);
}


