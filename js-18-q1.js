// ? Question-1:follow these steps:
//todo-1:Write a function called "calculate" that takes 4 parameters.
//todo-2:The first and seconde parameters should be numbers.
//todo-3:The third parameter should be a string indicating either "add => addition" or "multiply => multiplication".
//todo-4:The fourth parameter should be a function that log the result of the calculation.

function calculate(num1,num2,opration,Fun) {

let result="";

if(opration==="add"){

 result=num1+num2;

}else if(opration==="multiply"){

 result=num1*num2;

}

 Fun(result);
}

function handleCalculationResult(output) {
    console.log(output);
    
}




calculate(5, 3, "add", handleCalculationResult);
calculate(4, 6, "multiply", handleCalculationResult);
