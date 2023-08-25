// // 18.	Arr = [1, 2]; x = 3
// var arr = [1, 2], x =3;
// arr.unshift(x)
// console.log(arr);

// var arr = [3, 4, 2, 1];
// arr.sort((a,b) => a-b);
// console.log(arr);

// var arr = [1, 2, 4, 3];
// var total = 0;
// arr.reduce((result, currentValue) => {
//     return total = result += currentValue;
// }, 0);
// console.log(total);

// var arr = [1, 2, 4, 5, 4, 2];
// var newArr = [];
// for(let i = 0; i < arr.length; i++) {
//     if (arr[i] %2 === 0) {
//         newArr.includes(arr[i]) ? '' : newArr.push(arr[i]);
//     }
// }
// console.log(newArr);

// var arr = [
//     {gender: 'nam', age: 18}, 
//     {gender: 'nu', age: 20}, 
//     {gender: 'nam', age: 10}
// ];
// var newArr = arr.filter(human=>human.gender === 'nam');
// var sortedArr = newArr.sort((a, b) => a.age - b.age);
// console.log(sortedArr);

// let d = new Date(1996,9,28);
// let day = d.getDate();
// let month = d.getMonth();
// let year = d.getFullYear();
// let date = (day >= 10 ? day : "0" + day) + '/' + (month >= 10 ? month : "0" + month) + '/' + year;
// console.log(date);

// let d = new Date(2022,11,31);
// let day = d.getDate();
// let month = d.getMonth();
// let year = d.getFullYear();
// let setTime = d.setHours(23,59,59);
// let h = d.getHours();
// let m = d.getMinutes();
// let s = d.getSeconds();
// let date = (day >= 10 ? day : "0" + day) + '/' + (month >= 10 ? month : "0" + month) + '/' + year;
// let time = (h >= 10 ? h : "0" + h) + ':' + (m >= 10 ? m : "0" + m) + ':' + (s >= 10 ? s : "0" + s);
// console.log(date, time);

// var date = new Date();
// date.setDate(date.getDate() + 7);
// console.log(date);

console.log("0" && null && 0)