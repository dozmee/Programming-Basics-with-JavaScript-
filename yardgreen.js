function yardGreen(input){

    let priceForOzelenqvane = Number(input[0]);
    
    let sumForAllDvor = priceForOzelenqvane * 7.61;
    
    let finalSUmDvor = sumForAllDvor * 0.18
    
    let finishSum = sumForAllDvor - finalSUmDvor;
    console.log(`The final price is: ${finishSum} lv.`);
    console.log(`The discount is: ${finalSUmDvor} lv.`);
    
    
    
    
}
yardGreen([550])