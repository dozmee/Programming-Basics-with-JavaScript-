function food(input) {

    let nameSerial = input[0];
    let epizod = Number(input[1]);
    let produljitelnostPochivka = Number(input[2]);
  
    let obqd = 1 / 8 * produljitelnostPochivka;
    let otdih = 1 / 4 * produljitelnostPochivka;
  
    let totalPochivka = produljitelnostPochivka - obqd - otdih;
    
    if (totalPochivka >= epizod) {
      let timee = totalPochivka - epizod
  
      console.log(`You have enough time to watch ${nameSerial} and left with ${Math.ceil(timee)} minutes free time.`)
    }else {
  
      let nujnoVreme = epizod - totalPochivka
      console.log(`You don't have enough time to watch ${nameSerial}, you need ${Math.ceil(nujnoVreme)} more minutes.`);
    }
  
  
  
  
  }
  food(["Game of Thrones"
    ,60
    ,96])