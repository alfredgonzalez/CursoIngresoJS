/* Alfredo Gonzalez Div G
Enunciado: al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
*/
function mostrar()
{
	//tomo el mes
	var mesDelAnio =txtIdMes.value;
	var mensaje;

	switch(mesDelAnio)
	{
		case "Febrero":
			mensaje = "tiene 28 días.";
		break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje = "tiene 30 días.";
		break;
		default:
			mensaje = "tiene 31 días.";
		break;
	}
	alert(mensaje);
}