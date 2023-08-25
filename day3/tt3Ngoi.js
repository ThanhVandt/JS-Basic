//Toán tử 3 ngôi - ternary operator

var course = {
    name: 'js',
    coin: 250
}

// if (course.coin > 0) {
//     console.log(`${course.coin} coins`);
// } else {
//     console.log('free');
// }

var result = course.coin > 0 ? `${course.coin} coins` : 'free';

var a = 1;
var b = 2;
var c = a > 0 ? a : b