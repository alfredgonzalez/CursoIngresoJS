/* Alfredo Gonzalez Div G
Enunciado Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) 
*/
function mostrar()
{
	var edad;
	
	edad = txtIdEdad.value
	edad = parseInt(edad);

	if(edad <18 && edad >12)
	{
		alert("Usted es adolescente");
	}
	
}