//Làm việc với chuỗi
var myString = 'Hoc js tai f8!'
//keyword: js string methods

//1.Length
// console.log(myString.length);

//2.Find index: search(), indexOf('js',6), lastIndexOf()
// console.log(myString.indexOf('js'));

//3.Cut string
console.log(myString.slice(-3, -1)); //(cắt từ phải sang trái)f8

//4.Replace
// console.log(myString.replace('js','javascript'));
// console.log(myString.replace(/js/g,'javascript'));

//5.Convert to upper case: tất cả in hoa
// console.log(myString.toLocaleUpperCase());

//6.Convert to lower case
// console.log(myString.toLocaleLowerCase());

//7.Trim: loại bỏ các dấu cách thừa
// console.log(myString.trim().length()); //20

//8.Split: chuyển đổi chuỗi thành mảng
// var languages = 'js, php, ruby';
// console.log(languages.split(', '));

// var languages = 'van';
// console.log(languages.split(''));//["v","a","n"]

//9.Get a character by index 
// const myString2 = 'thanh';
// console.log(myString2.charAt(4)); //h
// console.log(myString2.charAt(5)); //trả về chuỗi rỗng
// console.log(myString2[4]); //h

//10.padStart: thêm kí tự vào đầu chuỗi

function isNumber(value) {
    if (value.toString() !== "NaN" && typeof value === "number") {
        return true;
    } else return false;
}
isNumber(NaN)