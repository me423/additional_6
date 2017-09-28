module.exports = function zeros(expression) {
  	function multiply(first, second) {
	  var result=[];
	  var length;
	  var a;
	  
	  length = first.length + second.length - 1;
	  for(var i = 0; i < length; i++){
	    result[i] = 0;
	  }
	  for(var i = 0; i < first.length; i++){
	    for(var j = 0; j < second.length; j++){
	      result[i+j] += first[i] * second[j];
	    }
	  }
	  for(var i = result.length - 1; i >= 0; i--){
	      if(i != 0){
	        a = Math.floor(result[i]/10);
	        result[i] %= 10;
	        result[i-1] += a;    
	      }
	  }
	  
	  return result.join('');
	}
	 
  function fact(x, type) {
    var result = 1;
    for (var i = 1; i <= x; i++) {
      if (type == "!!") {
        if ((x % 2 == 0) && (i % 2 == 0))
          result = multiply(String(result), String(i));
        if ((x % 2 == 1) && (i % 2 == 1))
          result = multiply(String(result), String(i));
      } else
        result = multiply(String(result), String(i));
    }
    return result;
  }

  var arrExp = expression.split("*");
  function calc(exp) {
    var lastChar = exp[exp.length - 1];
    var preLastChar = exp[exp.length - 2];
    if (lastChar == "!" && lastChar == preLastChar) {
      return fact(parseInt(exp), "!!"); 
    }
    if (lastChar == "!" && lastChar !== preLastChar) {
      return fact(parseInt(exp), "!");
    }
  }
  var result = "1";
  for (var i = 0; i < arrExp.length; i++) {
    var element = arrExp[i];
    result = multiply(result, calc(element));
  }
  function counter(string) {
    var counter = 0;
    for (var i = string.length - 1; i >= 0; i--) {
      if (string[i] == "0")
        counter++;
      else
        return counter;
    }
  }

  return counter(result);
  // your solution
}
