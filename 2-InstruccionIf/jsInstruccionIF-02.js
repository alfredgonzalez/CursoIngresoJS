/* Alfredo Gonzalez Div G
Enunciado al ingresar una edad debemos informar solo si la persona es mayor de edad
*/
function mostrar()
{
	
	var edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad > 18)
	{
	alert("La persona es mayor de edad");
	}
	
}