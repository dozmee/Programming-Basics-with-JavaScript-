function kino(input) {

    let dniPrestoi = Number(input[0]);
    let pomeshtenie = input[1];
    let ocenka = input[2];
    

    let night = dniPrestoi - 1;
    let price = 0;
    

    if (pomeshtenie === "room for one person") {
        price = night * 18.00;
    } else if (pomeshtenie === "apartment") {
        price = night * 25.00;
        if (dniPrestoi < 10) {
            price = price * 0.70;
        } else if (night <= 15) {
            price = price * 0.65;
        } else {
            price = price * 0.50
        }
    } else if (pomeshtenie === "president apartment") {
        price = night * 35.00
        if (night < 10) {
            price = price * 0.90
        } else if (night <= 15) {
            price = price * 0.85
        } else {
            price = price * 0.80
        }
    } if (ocenka === "positive") {
        price = price * 1.25
    } else if (ocenka === "negative"){
        price = price * 0.90
    }

    

    console.log(price.toFixed(2));

}
kino([14
,"apartment"
,"positive"])