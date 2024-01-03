/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor(result = 0) {
    this.result = result;
  }

  add(a) {
    this.result = this.result + a;
  }

  subtract(a) {
    this.result = this.result - a;
  }

  multiply(a) {
    this.result = this.result * a;
  }

  divide(a) {
    if (a === 0) {
      throw new Error("Error: Cannot divide by zero");
    } else {
      this.result = this.result / a;
    }
  }

  getResult() {
    return this.result;
  }

  clear() {
    this.result = 0;
  }

  calculate(str) {
    const outputStack = new Stack();
    const operatorStack = new Stack();
    let parenthesesCount = 0;

    const precedence = {
      "+": 1,
      "-": 1,
      "*": 2,
      "/": 2,
    };

    const isOperator = (token) => ["+", "-", "*", "/", "(", ")"].includes(token);

    const handleOperator = (operator) => {
      while (
        operatorStack.length > 0 &&
        operatorStack.first.value !== "(" &&
        precedence[operatorStack.first.value] >= precedence[operator]
      ) {
        const operatorFromStack = operatorStack.pop();
        if (operatorFromStack !== "(") {
          const operand2 = outputStack.pop();
          const operand1 = outputStack.pop();

          switch (operatorFromStack) {
            case "+":
              outputStack.push(operand1 + operand2);
              break;
            case "-":
              outputStack.push(operand1 - operand2);
              break;
            case "*":
              outputStack.push(operand1 * operand2);
              break;
            case "/":
              if (operand2 === 0) {
                throw new Error("Error: Cannot divide by zero");
              }
              outputStack.push(operand1 / operand2);
              break;
          }
        }
      }
      if (operator !== ")") {
        operatorStack.push(operator);
      } else {
        // Pop "(" from the operator stack
        operatorStack.pop();
        if (parenthesesCount > 0) {
          parenthesesCount--;
        } else {
          throw new Error("Error: Mismatched parentheses in the expression");
        }
      }
    };

    str = str.split(" ").join("");
    const tokens = str.match(/(?:\d+\.\d+|\d+|[()+\-*/])|\S/g);

    for (const token of tokens) {
      if (!isNaN(parseFloat(token))) {
        outputStack.push(parseFloat(token));
      } else if (isOperator(token)) {
        if (token === "(") {
          parenthesesCount++;
        } else if (token === ")") {
          if (parenthesesCount > 0) {
            parenthesesCount--;
          } else {
            throw new Error("Error: Mismatched parentheses in the expression");
          }
        }
        handleOperator(token);
      } else {
        throw new Error(`Error: Invalid token "${token}" in the expression`);
      }
    }

    if (parenthesesCount !== 0) {
      throw new Error("Error: Mismatched parentheses in the expression");
    }

    while (operatorStack.length > 0) {
      const operator = operatorStack.pop();
      if (operator === "(" || operator === ")") {
        throw new Error("Error: Mismatched parentheses in the expression");
      }
      const operand2 = outputStack.pop();
      const operand1 = outputStack.pop();

      switch (operator) {
        case "+":
          outputStack.push(operand1 + operand2);
          break;
        case "-":
          outputStack.push(operand1 - operand2);
          break;
        case "*":
          outputStack.push(operand1 * operand2);
          break;
        case "/":
          if (operand2 === 0) {
            throw new Error("Error: Cannot divide by zero");
          }
          outputStack.push(operand1 / operand2);
          break;
      }
    }

    this.result = outputStack.pop();
    return this.result;
  }
}






class Node{
  constructor(value){
    this.value = value ;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.first= null;
    this.last = null;
    this.length = 0;

  }

  push(value)
  {
    let newNode = new Node(value);
    if(!this.first){
      this.first = newNode;
      this.last = newNode;

    }else{
      let prevFirst = this.first;
      this.first= newNode;
      this.first.next = prevFirst;

    }
    this.length = this.length + 1;
    return this.length;
  }

  pop(){
    if(!this.first) return null;
    let prevFirst = this.first;
    if(this.first === this.last){
      this.first = null;
      this.last = null;
    }else{
      this.first = this.first.next
    }
    this.length = this.length - 1;
    return prevFirst.value;

  }


      
}

class Queue{
   constructor(){
    this.first =null;
    this.last = null;
    this.length = 0;
   }
   enqueue(){
      let newNode = new Node(value)
      if(!this.first){
        this.first = newNode;
        this.last = newNode;
      }else{
        this.last.next =newNode;
        this.last = newNode;
      }
      this.length = this.length +1 ;
      return this.length;

   }
   dequeue(){
    if(!this.first) return null;
    let prevFirst = this.first;
    if(this.first===this.last){
      this.first = null;
      this.last = null;
    }
    else{
      this.first = this.first.next;
    }
    this.length = this.length -1 ;
    return prevFirst.value
   }
}








module.exports = Calculator;
