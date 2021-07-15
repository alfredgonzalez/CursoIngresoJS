/*Alfredo Gonzalez Div G
Ejercicio E/S 10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var descuento;
	var porcentaje;
	var resultado;
	
	importe=document.getElementById("txtIdImporte").value;
	importe=parseInt(importe);
	porcentaje=prompt("ingrese el porcentaje");
	porcentaje=parseInt(porcentaje);
	descuento=(importe*porcentaje)/100;
	resultado=importe-descuento;
	document.getElementById("txtIdResultado").value=resultado;

}
