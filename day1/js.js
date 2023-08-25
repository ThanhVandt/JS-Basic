// var nums = [1,4,7,9,5];
// var a = new Array ("van","van2","van3","van4","van5");
// 0
// for(var i=0;i<nums.length;i++){
//     if(nums[i]<=6){
//         nums[i]=1;
//     }
//     console.log(nums[i]);
// }
// console.log(nums);

//bt day2
// khởi tạo object bằng 2 cách
// tạo 1 object student có cách thuộc tính : name, msv,môn học,điểm
var obj1 = {
    name:"van",
    msv:"ph22521",
    subject:"javascript",
    mark:4
}
var obj2 = new Object();
obj2.name="abc";
obj2.msv="ph12345";
obj2.subject="react";
obj2.mark=7;

// lấy gt của điểm của khởi tạo trên
console.log(obj1.mark);

// dùng for lặp qua các phần tử của object
for (const key in obj1) {
    console.log(key);
}

// check nếu điểm <5 thì thêm thuộc tính hạnh kiểm = yếu vào object trên
if(obj1.mark<5){
    obj1.hanhkiem="yeu"
}
console.log(obj1);

// khởi tại function
function hi(){
    console.log("hi");
}
var hello = function(){
    console.log("hello");
}

// cách gọi để function chạy
hi();
hello();

// tạo một hàm để tính diện tích hình chữ nhật
function tinh(a,b){
    console.log("dt hcn la: s = " + a * b);
}
tinh(2,3)