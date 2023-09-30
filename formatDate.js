const formatDate = (date) => {
    const [, month, day, year] = date[Symbol.toPrimitive]('string').split(" ");
    return `${day} ${month} ${year}`;
};
console.log("Actual output: ", formatDate(new Date("2020-05-14")));
console.log("Expected output", "14 May 2020");