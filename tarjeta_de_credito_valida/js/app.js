
//Solicitar al usuario su numero de tarjeta 
var userCard = prompt("Proporciona tu número de tarjeta");

//Verificar que no contenga espacios
switch (userCard){
case '':
alert('No dejes espacios en blanco, ingresa un número');
break;}

//Dar reversa al array que proporcionó el usuario y guardarlo en un núevo array
var reverse = function(array){       
  var newArray = [];
  var size = array.length;
  var lastPosition = size-1;
  for (var i = lastPosition; i>=0; i--){
    newArray.push(array[i]);
  }

  return newArray;
}

console.log(reverse (userCard));

//Crear una varialbe que multiplique por 2 los numeros pares, que esté vacia para recibir los datos
var multiplyIm2 = [];

//Crear un ciclo que recorra y guarde los indices pares en una variable total
for(i=0; i<reverse.length;i++){
		  multiplyIm2+=reverse.charAt(i)*2;
}

//Crear una varialbe total que almacenará la suma de pares e impares
var sum = 0;

//En una variable total almacenar y sumar los indices pares de los datos proporcionados por el usuario

for(i=0; i<multiplyIm2.length;i++){
	sum+=parseInt(multiplyIm2.charAt(i));
}

//En la variable total almacenar y sumar los indices impares

for(i=userCard.length-3;i>=0;i-=2){
	sum += parseInt(userCard.charAt(i));
}

//Sumar indices pares e impares que se guardaron en la variable total

sum+=parseInt(userCard.charAt(userCard.length-1))

//Comprobar que sea divisible entre 10 con residuo 0 para ser valida de lo contrario no es válida

if((sum%10)===0) {
	return true;{
		alert('Tu tarjeta es válida');
	}


else 	

	return false;{
		alert('Tu tarjeta No es válida');
	}

}


