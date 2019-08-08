const title = document.createElement ("h1");
title.innerHTML = "hello World";                        //innerhtml es para agregar todo tipo de etiquetas qu seria HTML

const input = document.createElement ("input");
input.setAttribute("type","text");                      //setAttribute creas un atributo y seleccionas el tipo y el text para intup

const lista = document.createElement ("ol");

const button = document.createElement ("button");
button.innerText = "Obtener";                           //innertext es para agregar texto 
button.addEventListener("click",function(){             //addEventListetener es el evento que se quiere hacer, tiene un evento qu seria click despues del click se ejecuta una funcion 
    console.log(input.value);                           //evaluar en donde lo quieres y (donde lo quieres poner)
    lista.innerHTML = "";                               //para limpiar la lista y no se valla acomulando     
    for (let i=0; i<input.value; i++){
        console.log(i,input.value);
        var li = document.createElement("li");
        lista.appendChild(li);
    }
});
//button.setAttribute("onclick","logInput()"); otra forma de hacer un click

function renderList(){
    ul.innerHTML = "";
    for(i = 0; i < input.value; i++){
        const li = document.createElement("li");
        fibonacci(i).then(result => {
            li.innerHTML = result;
            ul.appendChild(li);
        });
    }
}
function fibonacci(num){
    let x = 1,
    y = 0,
    tmp;

    while (num >= 0){
        tmp = x;
        x += y;
        y = tmp;
        num--;
    }
    return y;
}

document.body.appendChild(title);                       //appendChild es para agregar elementos a otro elementos 
document.body.appendChild(input);
document.body.appendChild(button);
document.body.appendChild(lista);

function addTwoNumbersAsync(num1, num2){
    returnnum1 + num2;
}

const result = addTwoNumbersAsync(1, 2);
console.log(result +1);


function addTwoNumbersAsync(num1, num2){
    return new Promise ((resolve, reject)=>{
        setTimeout(() =>{
            resolve(num1 + num2);
        }, 1000);
    });
}

addTwoNumbersAsync(1, 2)
.then(result =>{
    console.log('First result: ${result}');
    return addTwoNumbersAsync(result, 1);
})
.then(result =>{
    console.log('second result: ${result}');
})

.catch(e =>{
    console.log(e);
})