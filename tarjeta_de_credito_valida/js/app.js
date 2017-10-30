var userCard = prompt("Proporciona tu número de tarjeta");
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

var sum = function (par, impar)