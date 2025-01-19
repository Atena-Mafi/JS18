/*
  Write a function that calculates the sum of two numbers.

  - The function must return a promise.
  - The solution should be solved after half a second.
  - If a negative value is entered into the function, it will be rejected.
  - Note: you should use "Promise" to resolve this question.
*/




function sum (num1,num2){
  return new Promise(function(resolve, reject){
   let result="";

   if(num1 <0 || num2 <0 ){
    reject( "It's rejected")}else{

      setTimeout(()=>{
        result=num1 +num2;
       
          resolve(result);
  
     
      },500);
      
   
    }

  
  });

}
    




sum(5,-8).then((data)=>{
console.log(data);


}).catch((err)=>{

  console.log(err);
  
});



sum(5,8).then((data)=>{
  console.log(data);
  
  
  }).catch((err)=>{
  
    console.log(err);
    
  })



