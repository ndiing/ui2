Date.prototype.getWeek = function() {
    // Create a new Date object with the same year, month, and day
    var date = new Date(this.getTime());
    // Set the date to the first day of the year
    date.setMonth(0, 1);
    // Get the day of the week of this date (0: Sunday, 1: Monday, ..., 6: Saturday)
    var day = date.getDay();
    // Adjust the day to handle cases where the first day of the year is not Sunday
    // (e.g., if it's Monday, we want to start counting weeks from Monday)
    if (day > 0) {
        date.setDate(1 + (7 - day));
    }
    // Get the difference in milliseconds between the date and the first day of the year
    var diff = this - date;
    // Calculate the number of weeks by dividing the difference by the number of milliseconds in a week
    var week = Math.ceil(diff / (7 * 24 * 60 * 60 * 1000));
    return week;
};

// // Example usage:
// var today = new Date();
// console.log("Week number:", today.getWeek());

Date.prototype.setWeek = function(week, year) {
    // Create a new Date object with the provided year
    var date = new Date(year, 0, 1);
    // Adjust the date to handle cases where the first day of the year is not Sunday
    // (e.g., if it's Monday, we want to start counting weeks from Monday)
    var day = date.getDay();
    if (day > 0) {
        date.setDate(1 + (7 - day));
    }
    // Calculate the number of milliseconds to add to the date to set it to the specified week
    var daysToAdd = (week - 1) * 7;
    date.setDate(date.getDate() + daysToAdd);
    // Set this date object to the calculated date
    this.setTime(date.getTime());
};

// // Example usage:
// var myDate = new Date();
// myDate.setWeek(20, 2024); // Sets myDate to the first day of the 20th week of 2024
// console.log("Date set to:", myDate.toDateString());
