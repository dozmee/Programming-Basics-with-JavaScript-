function plodzelenchuk(input) {


    let produkt = input[0];

    switch (produkt) {
        case "banana":
        case "apple":
        case "kiwi":
        case "lemon":
        case "cherry":
        case "grapes": console.log("fruit"); break;
        case "tomato":
        case "cucumber":
        case "pepper":
        case "carrot": console.log("vegetable"); break;
        default:
            console.log("unknown"); break;



    }


}
plodzelenchuk(["banana"])