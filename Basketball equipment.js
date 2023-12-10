function BasketballEquipment(input){

    //⦁	Баскетболни кецове – цената им е 40% по-малка от таксата за една година
    //	Баскетболен екип – цената му е 20% по-евтина от тази на кецовете
    //	Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип
    //⦁	Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка
    
    let godishnaTaksaBasketbol = Number(input[0]);
    
    
    let basketbolniKecove = godishnaTaksaBasketbol - (godishnaTaksaBasketbol* 0.40);
    let basketbolenEkip = basketbolniKecove -(basketbolniKecove* 0.20);
    let basketbolTopka = basketbolenEkip / 4 * 1;
    let basketbalAksesoar = basketbolTopka / 5 * 1;
    
    let totalSum = basketbolniKecove + basketbolenEkip + basketbolTopka + basketbalAksesoar+godishnaTaksaBasketbol;
    
    
    
    
    console.log(totalSum);
    
    
    
    
}
BasketballEquipment([365])