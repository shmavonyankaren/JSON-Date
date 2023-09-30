function longestTime(h, m, s) {
    const hoursToSeconds = h * 3600;
    const minutesToSeconds = m * 60;

    if(s > hoursToSeconds && s > minutesToSeconds) {
        return s;
    } else if(hoursToSeconds > s && hoursToSeconds > minutesToSeconds) {
        return h;
    } else {
        return m;
    }
}