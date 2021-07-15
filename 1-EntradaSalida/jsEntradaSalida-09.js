/* Alfredo Gonzalez Div G
Ejercicio E/S 9
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldo;
	var aumento;
	var porcentaje;
	var resultado;

	sueldo=document.getElementById("txtIdSueldo").value;
	sueldo=parseInt(sueldo);
	porcentaje=prompt("ingrese el porcentaje");
	porcentaje=parseInt(porcentaje);
	aumento=(sueldo*porcentaje)/100;
	resultado=sueldo+aumento;
	document.getElementById("txtIdResultado").value=resultado;
	
}