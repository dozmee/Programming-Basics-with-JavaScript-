function numberss(input) {

    let speed = Number(input[0]);
    if (speed < 100){
        console.log("Less than 100")
        }
    
    else if  (speed >=100 && speed <= 200){
       console.log("Between 100 and 200");
    }
    else {
        console.log("Greater than 200");
    }
    
 }
 numberss([95])
        