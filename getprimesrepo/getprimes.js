module.exports = {
 getPrimes:function (number) {
 primeArr = [2];
 if (number === 1){
  return '1 is not a prime number'
}

 else if (number < 2 || number.length === 0 || number < 0 && typeof number !== 'number') {
		return 'negative integers cannot be prime';
	}

  var isNumPrime = function(number) {
    var IsPrime;
    for(var i = 2; i < number; i++){
           if(number % i === 0){
               IsPrime = false ;
               break;
           }
           
            IsPrime = true;
           
      }
      return IsPrime;
  }
    for(var i = 2; i <= number; i++) {
          if(isNumPrime(i) === true ){
              primeArr.push(i);
          }
    }
    return primeArr;
  
 }
}
