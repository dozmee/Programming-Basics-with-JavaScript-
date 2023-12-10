function food(input){

    let numberChikenMenu = Number(input[0]);
    let numberMenuFish = Number(input[1]);
    let numberVeganMenu = Number(input[2]);
    
    
    let chikenMenu = numberChikenMenu *10.35;
    let fishMenu = numberMenuFish *12.40;
    let veganMenu = numberVeganMenu * 8.15;
    
    let sumMenu = chikenMenu+fishMenu+veganMenu;
    let desert = 0.20*sumMenu;
    let dostavka = 2.50;
    
    let totalSum = sumMenu+desert+dostavka
    console.log(`${totalSum}`)
    
}
food([2,4,3])