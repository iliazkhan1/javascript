function calculator(num1, num2, operator) {
    let result;
  
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          result = "Cannot divide by zero";
        }
        break;
      default:
        result = "Invalid operator";
    }
  
    console.log("Result:", result);
  }
  
 
calculator(10, 5, '+'); 
calculator(10, 5, '-'); 
calculator(10, 5, '*'); 
calculator(10, 5, '/'); 
calculator(10, 0, '/'); 
calculator(10, 5, '%'); 