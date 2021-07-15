function mostrar()
{
	var numRandom;

  	numRandom = Math.floor(Math.random() * 10)+1;

	  if(numRandom == 9 || numRandom == 10)
	  {
		  alert("EXCELENTE "+numRandom);
	  }
	  else
	  {
		if(numRandom > 3)
		{
			alert("APROBÓ "+numRandom);
		}
		else
		{
			alert("Vamos, la proxima se puede "+numRandom);
		}
	  }
}