function tiket(input) {

    let day = input[0];

    if (day === "Monday" || day === "Tuesday") {
        console.log("12");
    }
    else if (day === "Wednesday" || day === "Thursday") {
        console.log(14);
    }
    else if (day === "Friday") {
        console.log(12);
    }
    else {
        console.log(16);
    }

}
tiket(["Friday"])