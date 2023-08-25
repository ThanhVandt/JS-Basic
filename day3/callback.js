//callback
//là hàm dc truyền qua đối số khi gọi hàm khác

//1.là hàm
//2.đc truyền qua đối số
//3.đc gọi lại(trong hàm nhận đối số) 

// function myFunction(param) {
//     if(typeof param === 'function') {
//         param ('Học lập trình');
//     }
// }
// function myCallback(value) {
//     console.log('value: ', value);
// }
// myFunction(myCallback);

//xd lại hàm map()
Array.prototype.map2 = function(callback) {
    var output = [], arrayLength = this.length;//định nghĩa tắt 2 biến output và arrayLength
    for(var i = 0; i < arrayLength; ++i) {
        var result = callback(this[i], i, this)
        output.push(result);
    }
    return output;
}
var courses = [
    'js',
    'php',
    'ruby'
];
// var htmls = courses.map2(function(course) {
//     return `<h2>${course}</h2>`;
// });

// var htmls = courses.map(function(course) {
//     return `<h2>${course}</h2>`;
// });
// console.log(htmls.join(''));
var nums = [1, 2, 3, 4, 5];
//[2, 4, 6, 8, 10];
var arr2 = nums.map2(function(element,index,array) {
    return 1;
})
// console.log(arr2);

var study = [{
    name: "van",
    diem: "8"
},
{
    name: "ngoc",
    diem: "6"
},
{
    name: "hai",
    diem: "4"
},
]
// ["van", "ngoc", "hai"]
var newArr = study.map2(function(element) {
    return element.name;
})
// studyNew = [{
//     name: "van",
//     diem: "8",
//     hk: "gioi"
// },
// {
//     name: "ngoc",
//     diem: "6",
//     hk: "kha"
// },
// {
//     name: "hai",
//     diem: "4",
//     hk: "yeu"
// },
// ]

var studyNew = study.map(function(element) {
    var obj = {};
    // obj = Object.assign({}, element);
    obj.name = element.name;
    obj.diem = element.diem;
    if(obj.diem >= 8) {
        obj.hk = "gioi"
    } else if (obj.diem >= 6) {
        obj.hk = "kha"
    } else {
        obj.hk = "yeu"
    }
    return obj;
})
console.log(studyNew);
console.log(study);