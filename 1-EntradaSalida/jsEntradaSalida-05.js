/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	var nombre;
	var edad;

	nombre = document.getElementById("txtIdNombre").value;
	
	edad = document.getElementById("txtIdEdad").value;

	alert(" usted se llama " + nombre +" y tiene " + edad +" años");

	//errores 
	//edad=prompt=("ingrese edad");
	//edad=prompt("ingrese edad").value;
	//edad=prompt("txtIdNombre");

}

