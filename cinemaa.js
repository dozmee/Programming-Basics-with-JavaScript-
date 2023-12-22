function cinema(input) {

    let tipProjekciq = input[0];
    let row = Number(input[1]);
    let coloni = Number(input[2]);


    let income = 0;

    if (tipProjekciq == "Premiere") {
        income = row * coloni * 12.00;
    }else if (tipProjekciq == "Normal") {
        income = row * coloni * 7.50;
    }else if (tipProjekciq =="Discount"){
        income = row * coloni * 5.00;
    }
    console.log(`${income.toFixed(2)} leva`);

}
cinema(["Normal"
,73
,61])