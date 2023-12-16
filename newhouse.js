function newHouse(input) {

    let flowers= input[0];
    let numberFlowers= Number(input[1]);
    let budget = Number(input[2]);

    let price = 0;

    if (flowers=== "Roses") {
        price = numberFlowers* 5
        if (numberFlowers> 80) {
            price = price * 0.9
        }
    } else if (flowers=== "Dahlias") {
        price = numberFlowers* 3.80
        if (numberFlowers> 90) {
            price = price * 0.85
        }
    } else if (flowers=== "Tulips") {
        price = numberFlowers* 2.80
        if (numberFlowers> 80) {
            price = price * 0.85
        }
    } else if (flowers=== "Narcissus") {
        price = numberFlowers* 3
        if (numberFlowers< 120) {
            price = price * 1.15
        }

    } else if (flowers=== "Gladiolus") {
        price = numberFlowers* 2.50
        if (numberFlowers< 80) {
            price = price * 1.20
        }
    } if (budget < price) {
        let finishSYm = price - budget
        console.log(`Not enough money, you need ${finishSYm.toFixed(2)} leva more.`);
    } else {
        let finishSYmm = budget - price
        console.log(`Hey, you have a great garden with ${broicvetq} ${cvetq} and ${finishSYmm.toFixed(2)} leva left.`);
    }





}
newHouse(["Roses"
,55
,250])