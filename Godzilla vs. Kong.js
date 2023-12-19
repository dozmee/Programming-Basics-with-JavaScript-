function kongvsking(input) {

    let buged = Number(input[0]);
    let numberStatist = Number(input[1]);
    let priceOneStatist = Number(input[2]);


    let sumDekor = 0.10 * buged;
    let sumObleklo = numberStatist * priceOneStatist;


    if (numberStatist > 150) {
        sumObleklo = 0.90 * sumObleklo;
    }
    
    let totalSumFilm = sumDekor + sumObleklo;

    if (totalSumFilm > buged) {
        let suma = totalSumFilm - buged;
        console.log("Not enough money!");
        console.log(`Wingard needs ${suma.toFixed(2)} leva more.`);
    }

    else {
        let sum = buged - totalSumFilm;
        console.log("Action!");
        console.log(`Wingard starts filming with ${sum.toFixed(2)} leva left.
      `);

    }

}
kongvsking([20000
    ,120
    ,55.5])