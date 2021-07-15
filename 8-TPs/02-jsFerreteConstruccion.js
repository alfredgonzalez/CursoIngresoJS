/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;//largo del rectangulo de la construccion
    var ancho;//ancho del rectangulo de la construccion
    var sumaRectangulo;//suma de ancho y largo
    var resultado;

    largo=document.getElementById("txtIdLargo").value;
    largo=parseFloat(largo);
    ancho=document.getElementById("txtIdAncho").value;
    ancho=parseFloat(ancho);
    
    sumaRectangulo=(largo+ancho)*2;
    resultado=sumaRectangulo*3;

    alert("La cantidad de alambre a comprar es "+resultado+" metros de alambre.");
    



}
function Circulo () 
{
    var radio;
    var resultado;

    radio=document.getElementById("txtIdRadio").value;
    radio=parseFloat(radio);

    resultado=(radio)*3;

    alert("La cantidad de alambre a comprar es "+resultado+" metros de alambre.")
	
}
function Materiales () 
{
    var largo;//largo del rectangulo de la construccion
    var ancho;//ancho del rectangulo de la construccion
    var multiplicarRectangulo;//suma de ancho y largo
    var cemento;
    var cal;

    largo=document.getElementById("txtIdLargo").value;
    largo=parseFloat(largo);
    ancho=document.getElementById("txtIdAncho").value;
    ancho=parseFloat(ancho);
    
    multiplicarRectangulo=largo*ancho;
    cemento=(multiplicarRectangulo)*2;
    cal=(multiplicarRectangulo)*3;


    alert("Para hacer el contrapiso se necesitan "+cemento+" bolsas de cemento y"+cal+" bolsas de cal");
	
}