Date.prototype.getWeek = function () {
    var date = new Date(this.getTime());
    date.setMonth(0, 1);
    var day = date.getDay();

    if (day > 0) {
        date.setDate(1 + (7 - day));
    }
    var diff = this - date;
    var week = Math.ceil(diff / (7 * 24 * 60 * 60 * 1000));
    return week;
};

Date.prototype.setWeek = function (week, year) {
    var date = new Date(year, 0, 1);
    var day = date.getDay();

    if (day > 0) {
        date.setDate(1 + (7 - day));
    }
    var daysToAdd = (week - 1) * 7;
    date.setDate(date.getDate() + daysToAdd);
    this.setTime(date.getTime());
};
