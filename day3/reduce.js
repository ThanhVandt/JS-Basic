//định nghĩa reduce2 method
Array.prototype.reduce2 = function (callback, result) {
    let i = 0
    console.log(arguments);
    if (arguments.length < 2) {//không truyền initialValue
        i = 1;
        result = this[0];
    }
    for (; i < this.length; i++) {
        result = callback(result, this[i], i, this);
        console.log("kq moi lan chay for" +result)
    }
    // console.log("cuoi cung" + result)
    return result;
}
// const numbers = [1, 2, 3, 4, 5];
// const init = [-1, 0];
// var callback  = (a, b) => {
//     return [...a, b];
// }
// const newarr = numbers.reduce2(callback, [-1, 0])
// console.log(newarr);
// // reduce(callback, initialValue);
// var new1 = [-1, 0, 1, 2, 3, 4, 5];
// // [-1, 0, 1]
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
// ["van", "ngoc", "hai"];
var cb = (a, b) => {
    return a + Number(b.diem);
}
const dtb = study.reduce(cb, 0)
var tbc = dtb/(study.length);
console.log(dtb);
console.log(tbc);
// ["van"]

// parseInt
