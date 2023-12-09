function SuppliesForSchool(input) {

    let numberHimikal = Number(input[0]);
    let numberMarkeri = Number(input[1]);
    let litersPreparat = Number(input[2]);
    

    let himikal = 5.80;
    let Markeri = 7.20
    let Preparat = 1.20;

    let sumHimikal = numberHimikal * himikal;
    let sumMarkeri = numberMarkeri * Markeri;
    let sumLiters = litersPreparat * Preparat;


    let totalSUm = sumHimikal + sumMarkeri + sumLiters;
    let sumDiscount = totalSUm - (totalSUm * 0.25);
    console.log(sumDiscount);

}
SuppliesForSchool([2, 3, 4, 25])