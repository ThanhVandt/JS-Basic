// forEach, find, filter, some, every, reduce

var courses = [
    'js',
    'php'
];
courses.length = 10;
for(var index in courses) {
    console.log(courses[index]);
}
//k dùng var i = 0; i < courses.length; ++i vì