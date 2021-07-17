/* Alfredo Gonzalez Div G
TP: 4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantidadLamparas;//cantidad de lamparas
    var precioLamparas//precio de las lamparas
    var descuento;
    var porcentaje;
    var precioDescuento;//precio con descuento
    var marca;//marca de la lampara
    var impuesto;
 	
    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    cantidadLamparas = parseInt(cantidadLamparas);
    marca = document.getElementById("Marca").value;

    precioLamparas = cantidadLamparas * 35;

    porcentaje = 0;

    if(cantidadLamparas>5)//A)
    {
        porcentaje = 50;
    }
    else//B
    {
        if(cantidadLamparas==5)
        {
            if(marca=="ArgentinaLuz")
            {
                porcentaje = 40;
            }
            else
            {
                porcentaje = 30;
            }
        }
        if(cantidadLamparas==4)//C
        {
            if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
            {
                porcentaje = 25;
            }
            else
            {
                porcentaje = 20;
            }   
        }
        if(cantidadLamparas==3)//D
        {
            if(marca=="ArgentinaLuz")
            {
                porcentaje = 15;
            }
            else
            {
                if(marca =="FelipeLamparas")
                {
                    porcentaje = 10;
                }
                else
                {
                    porcentaje = 5;
                }
            }
        }
        
    } 
    descuento = (precioLamparas*porcentaje)/100;
    precioDescuento = (precioLamparas-descuento);
    
    if(precioDescuento>120)
    {
        impuesto = (precioLamparas*10)/100;
        precioDescuento = (precioDescuento+impuesto);

        alert("Usted pago "+impuesto+" IIBB");
    }

    document.getElementById("txtIdprecioDescuento").value = precioDescuento;
}
