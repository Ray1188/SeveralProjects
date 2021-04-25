// let now = new Date();
// let date = new Date(2015, 23, 4, 12, 59, 59);
// let diff = now.getTime() - date.getTime();
//
// console.log(diff);

let date1 = new Date(Date.parse('2021,3,21'))
console.log('Date', date1)
console.log('DateUtc', date1.toUTCString())

let now = new Date();
console.log('DateNow', now)
let str  = date1.getFullYear() + '-' + date1.getMonth() + '-' + date1.getDate();

console.log(str);
console.log('Year: ', date1.getFullYear() )
console.log('Month: ',date1.getMonth())
console.log('Date: ',date1.getDate())
console.log('Day: ',date1.getDay())
const weekDays = ['Sun','Mon', 'T', 'Wed', 'Th', 'Fr', 'Sat']
function getDayName(d){
    return weekDays[d.getDay()]
}
console.log('dayname: ',getDayName(date1))
