function demo(input) {

    let budjetGrupa = Number(input[0]);
    let sezon = input[1];
    let numberRibari = Number(input[2]);

    let price = 0;
    //let numberKorab = 0;
    if (sezon === "Spring") {
        price = 3000;
        if (numberRibari <= 6) {
            price = price * 0.90;

        } else if (numberRibari <= 11) {
            price = price * 0.85;

        } else if (numberRibari >= 12) {

            price = price * 0.75;
        }

    } else if (sezon === "Summer") {
        price = 4200;
        if (numberRibari <= 6) {
            price = price * 0.90;
        } else if (numberRibari <= 11) {
            price = price * 0.85;
        } else if (numberRibari >= 12) {
            price = price * 0.75;
        }
    } else if (sezon === "Autumn") {
        price = 4200;
        if (numberRibari <= 6) {
            price = price * 0.90;

        } else if (numberRibari <= 11) {
            price = price * 0.85;

        } else if (numberRibari >= 12) {

            price = price * 0.75;
        }

    } else if (sezon === "Winter") {
        price = 2600;
        if (numberRibari <= 6) {
            price = price * 0.90;

        } else if (numberRibari <= 11) {
            price = price * 0.85;

        } else if (numberRibari >= 12) {
            price = price * 0.75;

        }

    } if (sezon === "Spring" || sezon ==="Summer" || sezon === "Winter") {
        if (numberRibari % 2 === 0) {
            price = price * 0.95;
        }
    } if (budjetGrupa >= price) {
        let totalSum = budjetGrupa - price
        console.log(`Yes! You have ${totalSum.toFixed(2)} leva left.`);
    } else {
        let totalSum = price - budjetGrupa
        console.log(`Not enough money! You need ${totalSum.toFixed(2)} leva.`);
    }





}
demo([3000
,"Summer",
11])