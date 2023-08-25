// For/of loop dùng cho mảng

var languages = [
    'js',
    'php'
]
// for(var value of languages) {third}

// For/of loop dùng cho đối tượng
var myIn4 = {
    name: 'thanh van',
    age: 19
};
// for(var value of languages) {third} //Uncaught TypeError
for(var value of Object.keys(myIn4)) {
    console.log(myIn4[value]);
}

for(var value of Object.values(myIn4)) {
    console.log(value);
}


