function getDay(data) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date(data);
    const day = date.getDay();

    return days[day];
}