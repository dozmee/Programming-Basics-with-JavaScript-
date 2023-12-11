function toys(input) {


    let cenaEkskurziq = Number(input[0]);
    let numberPuzels = Number(input[1]);
    let speakingDoll = Number(input[2]);
    let plyshenoMeche = Number(input[3]);
    let numberMinions = Number(input[4]);
    let numberKamionche = Number(input[5]);


    let totalSum = numberPuzels * 2.60 + speakingDoll * 3 + plyshenoMeche * 4.10 + numberMinions * 8.20 + numberKamionche * 2;

    let sumIgrachki = numberPuzels + speakingDoll + plyshenoMeche + numberMinions + numberKamionche

    if (sumIgrachki >= 50) {
        totalSum = 0.75 * totalSum;
    }

    totalSum = 0.90 * totalSum;
    if (totalSum >= cenaEkskurziq) {
        let ostavashtiPari = totalSum - cenaEkskurziq;
        console.log(`Yes! ${ostavashtiPari.toFixed(2)} lv left.`);
    } else {
        let nyjniPari = cenaEkskurziq - totalSum;
        console.log(`Not enough money! ${nyjniPari.toFixed(2)} lv needed.`);
    }
}
toys([40.8,20,25,30,50,10])