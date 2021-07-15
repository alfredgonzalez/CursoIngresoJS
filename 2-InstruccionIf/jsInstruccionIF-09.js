/* Alfredo Gonzalez Div G
Enunciado: Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
*/

function mostrar()
{
	//math.floor redondea un numero para abajo para dejarlo entero
	//math.random da un numero aleatorio entre 0 y 1 por ejemplo 0,3
	//multiplico *10 para que me de un valor entre 0 y 9
	//*10+1 para que la funcion no queda entre 0 y 9
	var numRandom;

  	numRandom = Math.floor(Math.random() * 10)+1;
  	alert(numRandom);
	
}