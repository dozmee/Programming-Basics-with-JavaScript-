function petshop(input){

    let numberFoodDog = Number(input[0]);
    let numberFoodCat = Number(input[1]);
    
    let foodDog = numberFoodDog * 2.50;
    let foodCat = numberFoodCat * 4;
    let foodSum = foodDog +foodCat;
    console.log(`${foodSum} lv.`);
    
    
} 
petshop([5,4])