/* 
Mảng
1.Tạo mảng
    -cách tạo
    -sd cách 1
    -kiểm tra data type
2.Truy suất mảng
    -độ dài mảng
    -lấy phần tử theo index
*/
var languages = [
    'javascript',
    'php',
    null,
    undefined,
    function() {},
    {},
    123
]
var arr = new Array ();

console.log(typeof []);//object
console.log(Array.isArray(languages));//ktra có phải array hay k =>true
