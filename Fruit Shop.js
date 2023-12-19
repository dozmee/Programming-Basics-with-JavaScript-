function shopfrut(input) {


    let plod = input[0];
    let days = input[1];
    let quantity = Number(input[2]);

    let price = 0;

    switch (days) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            if (plod === "banana") {
                price = quantity * 2.50;

            } else if (plod === "apple") {
                price = quantity * 1.20;
            } else if (plod === "orange") {
                price = quantity * 0.85;
            } else if (plod === "kiwi") {
                price = quantity * 2.70;
            } else if (plod === "pineapple") {
                price = quantity * 5.50;
            } else if (plod === "grapes") {
                price = quantity * 3.85;
            } else if (plod === "grapefruit") {
                price = quantity * 1.45;
            }
            break;
        case "Saturday":
        case "Sunday":
            if (plod === "banana") {
                price = quantity * 2.70;

            } else if (plod === "apple") {
                price = quantity * 1.25;
            } else if (plod === "orange") {
                price = quantity * 0.90;
            } else if (plod === "kiwi") {
                price = quantity * 3.00;
            } else if (plod === "pineapple") {
                price = quantity * 5.60;
            } else if (plod === "grapes") {
                price = quantity * 4.20;
            } else if (plod === "grapefruit") {
                price = quantity * 1.60;
            }
            break;
    }if (price > 0) {
        console.log(price.toFixed(2));
    }else {
        console.log("error");
    }









}
shopfrut(["apple",
    "Tuesday"
    ,2])