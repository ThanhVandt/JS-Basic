//For loop
// for (var i = 1; i <= 1000; i++) {
//     console.log(i);
// }
//trống i <= x sẽ trở thành vòng for vô hạn => treo trình duyệt

var myArray = [
    'js',
    'php',
    'java',
    'dart'
];

var arrayLength = myArray.length;//nên đặt biến như vậy thì khi vào vòng for chỉ cần lặp 1 lần tính toán myArray.length

for (var i = 0; i < arrayLength; i++) {
    console.log(myArray[i]);
}