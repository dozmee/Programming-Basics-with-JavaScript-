function shopping(input) {
    let petersBudget = Number(input[0]);
    let numberVideoCards = Number(input[1]);
    let numberProcesors = Number(input[2]);
    let numberRamMemory = Number(input[3]);

    let videoCards = numberVideoCards * 250;
    let priceOFProcesor = (videoCards * 0.35) * numberProcesors;
    let priceOfRamMemory = (videoCards * 0.10) * numberRamMemory;

    let totalPrice = videoCards + priceOFProcesor + priceOfRamMemory;

    if (numberVideoCards > numberProcesors) {
        totalPrice = totalPrice * 0.85;
    }
    if (totalPrice <= petersBudget) {
        let moneyLeft = petersBudget - totalPrice;
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
    } else {
        let moneyNeeded = totalPrice - petersBudget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`)
    }
}
shopping([900
    ,2
    ,1
    ,3])