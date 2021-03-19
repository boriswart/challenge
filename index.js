
var students = [
    { name: "Jake", score: 85 },
    { name: "Mark", score: 92 },
    { name: "Daryl", score: 90 },
    { name: "Tom", score: 75 },

];
var tot = 0;
classAverage(students) == 85.5;

/**
 * @param {string | any[]} students
 */
function classAverage(students) {
    var len = students.length;
    for (var i = 0; i <= len; i++) {
        var student = students[i];
        console.log("Running javascript ", tot);
        tot += student.score;
    }
    return tot / len;
}