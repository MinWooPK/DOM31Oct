// console.log(
    
//   document.doctype.nodeType,
//     document.doctype.nodeName
    
//     );
//     //Estructura de como funciona el DOM , el NODE.

    
// console.log()
// document.querySelector("a").nodeName, 
// document.querySelector("a").nodeType,
// document.querySelector("a").firstChild.nodeType,
// document.querySelector("a").firstChild.nodeName,
// document.querySelector("a").firstChild.nodeValue,
//querySelector identifica en este caso al selector, A
//DOM nombre de nodo y tienen un resultado en una tabla preestablecida.
    // );

//    let elementNode = document.createElement("div");

//    //console.log(elementNode,elementNode.nodeType);
//    //Creacion de un div en el html
//    let textNode = document.createTextNode("Hola");
//    console.log(textNode,elementNode.nodeType);

document.getElementById("A").innerHTML = "<strong>Rubén</strong>"

//nombre del Id en este caso el A, en el inner"interior" en este caso del HTML
//Se ha creado un elemento y se añadiendo al DOM. se ve en la consola del elemento pero no se ve en el HTML

document.getElementById("B").outerHTML = '<div id= "B" class = "new">no se duplica</div>';
//cambio de texto
document.getElementById("C").textContent = 'Que rollo macho';
//insercion de texto
document.getElementById("D").innerText = 'otro texto';
//insertar texto

// ========================================================================ES POR SABER, NO ES ESCENCIAL 
// function newContent() {

//     document.open();
//     document.write('<h1> Helllooo worldd</h2>');
//     document.close();
    
// }
// //Llamo a la funcion, abro el documento, escribo en el documento y cierro el documento
// ========================================================================ES POR SABER, NO ES ESCENCIAL 

//document.write("Escriba aqui")
//inserta un texto a "piñon" en el orden de de arriba a abajo en este caso al final
//document.write(Date())
//indica la hora 
let elementSNode = document.createElement('strong');
let textSnode = document.createTextNode('Tio')

document.querySelector('p').appendChild(elementSNode);
document.querySelector('strong').appendChild(textSnode);
//https://developer.mozilla.org/es/docs/Web/API/Node/appendChild
console.log(document.body.innerHTML)
//insercion y cambion en el HTML

//inserBefore();
//Se utiliza en casos en lo que queramos controlar la localización de un nodo child

//removeChild()  elimina nodo Child
//replaceChild() sustituye un nodo Child

console.log(document.doctype)
//Todos los elementos del documento HTML, se puede usar para ver todas las partes del HTML en especifico BODY, HEAD, etc.

//===========================================================================    HTML ELEMENT PROPERTY & METHODS      ========================================================

// createElement();

// let elementNode = document.createElement('textArea');
// creacion de un elemento en el documento HTML;

//getAttribute();

//========================================================================== IMPORTANTE ==================================================================================

//========================================================================== IMPORTANTE ==================================================================================
//EJEMPLO

const imageSrc = '/assets/img/JavaScript3.png';

let divElement = document.querySelector('#ImagenEjemplo');  //Aqui se selecciona el Id o la class del HTML en una variable
let imgElement = document.createElement('img');             //Aqui se dice el elemento a crear  en una variable

imgElement.src = imageSrc;                                  //se asocian las dos variables imageSrc y el imgElment.src

divElement.appendChild(imgElement)



// https://javascript.espaciolatino.com/evaluar/dom_basico_modelo.html
// Añadir una función javascript para que al pulsar el botón cambiar este título se convierta en Hola Mundo con Javascript . 
// El unico cambio necesario es el bloque con el texto cambiar y  completar la función cambiar() que aparece en el código de la página.


// function cambiar() {

//     let texto = document.getElementById('titular');
//     texto.innerText = 'Hola Mundo con JavaScript'
    
        
//     }
//========================================================================== IMPORTANTE ==================================================================================

//========================================================================== IMPORTANTE ==================================================================================
