function ekub(a, b) {
    if (b === 0) {
      return a;
    } else {
      return ekub(b, a % b);
    }
  }
  
 
  var num1 = 8;
  var num2 = 12;
  

  var n = ekub(num1, num2);
  console.log(n);
  