//every()
//true/false
//tất cả ptu thỏa mãn đk thì mới trả về true

Array.prototype.every2 = function(callback) {
    var output = true;
    for(var index in this) {
        if(this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this);
            if(!result) {
                output = false;
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

var result = courses.every2(function(course, index){
    console.log(course);
    return course.isFinish;
})
console.log(result);