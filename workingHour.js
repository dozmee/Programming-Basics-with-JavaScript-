function time(input) {

    let aroundTheClock = Number(input[0]);
    let dayOfWeek = input[1];

    if (aroundTheClock >= 10 && aroundTheClock <= 18) {
        switch (dayOfWeek) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
            case "Saturday":
                console.log("open");
                break;
            default:

                console.log("closed");
                break;


        }
    }

    else {
        console.log("closed")
    }


}
time([19,"friday"])