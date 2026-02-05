enum Weekdays {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}
enum Months {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
}
let now: any = new Date();
console.log(`
    Month : ${now.getMonth()}\n
    Weekday : ${now.getDay()}\n
    ${Weekdays.Monday}
    `)

//enum Reverse Mapping 
console.log(`
    Weekday: ${Weekdays[now.getDay()]}\n
    Month: ${Months[now.getMonth()]}
    `)