function Repainting (input){

    let NailonQuality = Number(input[0]);
    let paintQuality = Number(input[1]) ;
    let tinnerQuality = Number(input[2]);
    let worckHourse = Number(input[3]);
    

    let additionPaiQuality = 0.10 * paintQuality;
    let totalPaintQuality = paintQuality +additionPaiQuality;

    let totalNaylonQuality = NailonQuality+2;

    let totalMaterialsPrice = totalPaintQuality * 14.50 + totalNaylonQuality * 1.50 + tinnerQuality * 5 + 0.40;

    let workersSumPerHourse = 0.30 * totalMaterialsPrice;
    let totalWorkersSum = worckHourse * workersSumPerHourse;

    let totalSUm = totalMaterialsPrice  + totalWorkersSum;
    console.log(totalSUm);
}   
Repainting([10,11,4,8])