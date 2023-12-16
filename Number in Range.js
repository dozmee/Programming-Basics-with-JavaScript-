function isNumberValid(input) {
    let numbers = Number(input[0])
    
     if (numbers !== 0 && numbers >= -100 && numbers <= 100) {
       console.log("Yes"); 
     } else {
       console.log("No");
     }
   }
  isNumberValid([-25]) 