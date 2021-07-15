/* Alfredo Gonzalez Div G
Tp ferrete 1
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var sumar;
    
   precioUno=document.getElementById("txtIdPrecioUno").value;
   precioUno=parseInt(precioUno);
   precioDos=document.getElementById("txtIdPrecioDos").value;
   precioDos=parseInt(precioDos);
   precioTres=document.getElementById("txtIdPrecioTres").value;
   precioTres=parseInt(precioTres);

   sumar=precioUno+precioDos+precioTres;
   alert("la suma de los mismos es "+sumar);

}
function Promedio () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var promedio;

    precioUno=document.getElementById("txtIdPrecioUno").value;
   precioUno=parseInt(precioUno);
   precioDos=document.getElementById("txtIdPrecioDos").value;
   precioDos=parseInt(precioDos);
   precioTres=document.getElementById("txtIdPrecioTres").value;
   precioTres=parseInt(precioTres);
	
   promedio=(precioUno+precioDos+precioTres)/3;
   alert("El promedio de los mismos es "+promedio);

}
function PrecioFinal () 
{
	var precioUno;
    var precioDos;
    var precioTres;
    var precios;
    var IVA;
    var precioFinal;

    precioUno=document.getElementById("txtIdPrecioUno").value;
   precioUno=parseFloat(precioUno);
   precioDos=document.getElementById("txtIdPrecioDos").value;
   precioDos=parseFloat(precioDos);
   precioTres=document.getElementById("txtIdPrecioTres").value;
   precioTres=parseFloat(precioTres);

   precios=precioUno+precioDos+precioTres;

   IVA=(precios*21)/100;
   IVA=parseFloat(IVA);

   precioFinal=precios+IVA;

   alert("El precio final de los mismos es "+precioFinal);

   
}