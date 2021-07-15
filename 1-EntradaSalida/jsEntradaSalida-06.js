/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var primerNumero;
	var segundoNumero;
	var suma;
	var mensaje;
	

	//primerNumero=6;
	//parseInt(primerNumero);
	//nuevaVariable=parseInt(primerNumero);
	//primerNumero=parseInt(primerNumero);

	segundoNumero=66;


	//errores comunes
	//var altura;
	//altura=parseInt(altura);
	//poner el parseint antes del valor

	primerNumero=document.getElementById("txtIdNumeroUno").value;
	primerNumero=parseInt(primerNumero);


	segundoNumero=document.getElementById("txtIdNumeroDos").value;
	segundoNumero=parseInt(segundoNumero);

	suma=primerNumero+segundoNumero;

	mensaje="la suma es: "+suma;


	alert(mensaje);

}

