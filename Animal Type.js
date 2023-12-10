function animalType(input) {

    let enimal = input[0];

   
    switch (enimal) {
        case "crocodile":
        case "tortoise":
        case "snake":


            console.log("reptile");
            break;
        case "dog":

            console.log("mammal");
            break;
        default:
            console.log("unknown");
            break;



    }




}
animalType(["snake"])