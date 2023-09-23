function monthsInterval(start, end) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const startMonthIndex = start.getMonth();
    const endMonthIndex = end.getMonth();
    if(startMonthIndex < endMonthIndex) {
        return months.filter((el, index) => {
            return index >= startMonthIndex && index <= endMonthIndex;
        })
    } else if(endMonthIndex === startMonthIndex) {
        const currentMonths = months.slice(startMonthIndex).concat(months.slice(0, startMonthIndex));
        return months;
    } else {
        return months.slice(0, endMonthIndex + 1).concat(months.slice(startMonthIndex, months.length))
    }
}

let january = new Date(2017, 0, 1);
let march = new Date(2017, 2, 1); 
console.log(monthsInterval(january, march));

let december1 = new Date(2017, 11, 1);
let january1 = new Date(2018, 0, 1);
console.log(monthsInterval(december1, january1));

let january2017 = new Date(2017, 2, 1); 
let january2018 = new Date(2018, 2, 1);
console.log(monthsInterval(january2017, january2018));