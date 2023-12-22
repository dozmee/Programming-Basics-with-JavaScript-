function daysOfweek(input) {

    let day = Number(input[0]);

    switch (day) {
        case 1: day = "Monday"; break;
        case 2: day = "Tuesday"; break;
        case 3: day = "Wednesday"; break;
        case 4: day = "Thursday"; break;
        case 5: day = "Friday"; break;
        case 6: day = "Saturday"; break;
        case 7: day = "Sunday"; break;
        default: day = "Error"; break;




    }
    console.log(day);

}
daysOfweek([1])