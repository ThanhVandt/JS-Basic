/* 
//hàm đc truyền vào trong 1 tham số => callback
Array methods:
    forEach():
    every(): tất cả phải thỏa mãn 1 đk
    some(): chỉ cần 1 ptu thỏa mãn dk, trả về true và dừng vòng lặp
    find(): trả về 1 ptu, nếu k tồn tại thì trả về undefined
    filter(): trả về tất cả ptu thỏa mãn
    map(): lặp qua các ptu của mảng
    reduce(): 
*/

var courses = [
    {
        id: 1,
        name: 'js',
        coin: 0
    },
    {
        id: 2,
        name: 'php',
        coin: 0
    },
    {
        id: 3,
        name: 'react',
        coin: 1
    },
    {
        id: 4,
        name: 'ruby',
        coin: 1
    }
];

// var isFree = courses.some(function(courses, index) {
//     return courses.coin === 0;
// });
// console.log(isFree);

// function courseHandler(course, index) {
//     // console.log(course);
//     // return course; //in ra all ptu của courses
//     // return 123;// tất cả ptu của newCourses là 123
//     return {
//         id: course.id,
//         name: `Khoa hoc: ${course.name}`,
//         coin: course.coin,
//         coinText: `Gia: ${course.coin}`,
//         index: index,
//         originArray: courses,
//     }
// };
// var newCourses = courses.map(function() {

// }); //map return về mảng newCourses | trong map là 1 function

//1.Dễ hiểu
//2.Ngắn gọn
//3.Hiệu năng

//Biến lưu trữ
// var totaiCoin = 0;
//Lặp qua các ptu
// for (var course of courses) {
//     Thực hiện lưu trữ
//     totaiCoin += course.coin;
// }

//Biến lưu trữ
//Thực hiện lưu trữ

function coinHandler(accumulator, currentValue) {
    return accumulator + currentValue.coin;
}
var totaiCoin = courses.reduce(coinHandler, 0); //0 là gt khởi tạo của biến lưu trữ accumulator

