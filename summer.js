function summerOutfit(input) {

    let degrees = Number(input[0]);
    let aroundTheClock = input[1];

    let outfit = '';
    let shoes = '';

    if (degrees >= 10 && degrees <= 18) {
        if (aroundTheClock == "Morning") {
            outfit = "Sweatshirt"
            shoes = "Sneakers"
        } else if (aroundTheClock == "Afternoon" || aroundTheClock == "Evening") {
            outfit = "Shirt"
            shoes = "Moccasins"
        }
    } else if (degrees > 18 && degrees <= 24) {
        if (aroundTheClock == "Morning") {
            outfit = "Shirt"
            shoes = "Moccasins"
        } else if (aroundTheClock == "Afternoon") {
            outfit = "T-Shirt"
            shoes = "Sandals"
        } else if (aroundTheClock == "Evening") {
            outfit = "Shirt"
            shoes = "Moccasins"
        }
    } else if (degrees >= 25) {
        if (aroundTheClock == "Morning") {
            outfit = "T-Shirt"
            shoes = "Sandals"
        } else if (aroundTheClock == "Afternoon") {
            outfit = "Swim Suit"
            shoes = "Barefoot"
        } else if (aroundTheClock == "Evening") {
            outfit = "Shirt"
            shoes = "Moccasins"
        }

    } console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);

}
summerOutfit([16,
    "Morning"])
