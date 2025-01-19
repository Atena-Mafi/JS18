// ? Question-3: Write a function that simulates the filter function using a callback function:
// todo-1: Your function should take an array and a callback function as arguments.
// todo-2: It should return the result of filtering based on the callback.
// todo-3: In the callback function, check if the number is greater than 2.

const numbers = [1, 2, 3, 4, 5];


function callback(nums){

    let numBiggerThan2=[];

    nums.forEach(element => {
        if (element>2){
            numBiggerThan2.push(element);
        
            }
    });
   
   return numBiggerThan2;
};

 function simulateFilter(arr,func){

    return func(arr);
 }
const evenNumbers = simulateFilter(numbers, callback);
console.log(evenNumbers); //>>> [3, 4, 5]
