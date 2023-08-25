// some(): tối thiểu 1 element thỏa mãn đk thì trả về true

// true/false

Array.prototype.some2 = function(callback) {
    var output = false;
    for(var index in this) {
        if(this.hasOwnProperty(index)) {
            if(callback(this[index], index, this)) {
                output = true;
                break;
            }
        }
    }
    return output;
}
var courses = [
    {
        name: 'js',
        coin: 680,
        isFinish: true
    },
    {
        name: 'php',
        coin: 680,
        isFinish: false
    },
    {
        name: 'ruby',
        coin: 680,
        isFinish: false
    }
];

var result = courses.some2(function(course, index){
    console.log(course);
    return course.isFinish;
})
console.log(result);