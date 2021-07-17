/* Alfredo Gonzalez Div G
Enunciado: al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."
*/
function mostrar()
{
	//tomo el mes
	var mesDelAnio =txtIdMes.value;
	var mensaje;//ir igualandola con el texto que yo necesite para crear una sola alert

	switch(mesDelAnio)
	{
		case "Enero":
			mensaje = "que comiences bien el año!";
		break;
		case "Marzo":
			mensaje = "A clases!";
		break;
		case "Julio":
			mensaje = "Se vienen las vacaciones!";
		break;
		case "Diciembre":
			mensaje = "Felices fiestas!";
		break;
		default:
			mensaje = "no es ninguno de los meses seleccionados";
		break;
	}
	alert(mensaje);
}