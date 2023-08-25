// Đệ quy (hàm gọi lại chính nó)
// var array = ['a', 'b', 'c', 'a', 'b', 'c'];
// console.log([...(new Set(array))]);

//1.Xđ điểm dừng
//2.logic handle => tạo điểm dừng

// function countDown(num) {
//     i--;
//     if(num <= 0){
//         console.log(num);
//         return countDown(num - 1);
//     }
//     return num;
// }
// countDown(3); 

// function loop(start, end, cb) {
//     if(start < end) {
//         cb(start);
//         return loop(start + 1, end, cb);
//     }
// }

//giai thừa
function giaiThua(num) {
    // var output = 1;
    // for(var i = num; i > 0; i--) {
    //     output = output * 1;
    // } //giải bằng loop

    if(number > 0) {
        return number * giaiThua(number -1);
    }
    return 1;
}
//rangeError gặp lỗi logic, đệ quy,..

//lập trình hướng hàm --> thường sd đệ quy

