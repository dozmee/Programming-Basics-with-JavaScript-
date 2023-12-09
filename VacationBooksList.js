function VacantionBooks(input) {

    let numberPages = Number(input[0]);
    let pageForHourse = Number(input[1]);
    let numberDays = Number(input[2]);

    let allPages = numberPages / pageForHourse;
    let days = allPages / numberDays;


console.log(days);
}
VacantionBooks([212
    ,20
    ,2])