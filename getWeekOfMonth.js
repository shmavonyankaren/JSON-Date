const getWeekOfMonth = (date) => {
    const [, , day] = (date + 0).split(" ");

    const dayOfWeek = date.getDay();
    if(day < dayOfWeek) {
        return 1;
    }

    return Math.floor(day / 7) + 1;
};

const result = getWeekOfMonth(new Date(2017, 10, 9));
// => 2
console.log(result);