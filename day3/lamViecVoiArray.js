/*
Làm việc với array
1.To string: chuyển thành kí tự
2.Join: chuyển mảng thành chuỗi
3.Pop: xóa element cuối mảng và trả về ptu đã xóa. xóa hết sẽ trả về undefined
4.Push: thêm ptu cuối mảng và trả về số ptu của mảng
5.Shift: xóa element đầu mảng và trả về ptu đã xóa. xóa hết sẽ trả về undefined
6.UnShift: thêm ptu đầu mảng và trả về số ptu của mảng
7.Splicing: xóa, cắt, chèn ptu
8.Concat: hợp nhất 2 mảng
9.Slicing: cắt
*/

var languages = [
    'js',
    'php',
    'ruby'
];

// console.log(languages.join(', '));
// console.log(languages.push('dart', 'java'));//5
// console.log(languages.shift());//js
// console.log(languages.unshift('dart', 'java'));//5

// languages.splice(1, 1);//xóa php
// languages.splice(1, 0, 'dart');//chèn dart vào vị trí index 1
// languages.splice(1, 1, 'dart');//xóa php và chèn dart vào vị trí index 1

// var languages2 = [
//     'dart',
//     'java'
// ];

// console.log(languages2.concat(languages));//['dart', 'java', 'js', 'php', 'ruby']
console.log(languages.slice(1));//cắt từ vị trí index 1 đến hết mảng => ['php','ruby']
console.log(languages.slice(1,2));//cắt từ vị trí index 1 đến index 2 => ['php']
console.log(languages.slice(0));//lấy all ptu của mảng
console.log(languages.slice(-2,-1));//['php']
