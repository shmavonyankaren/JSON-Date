function dayOfYear(strOfYear) {
    const [month, day, year] =  strOfYear.split("/").map(el => +el);

    const days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        days[2] = 29;
    }

    return days.filter((el, index) => index < month).reduce((aggr, val) => {
        return aggr + val;
    }) + day;
}