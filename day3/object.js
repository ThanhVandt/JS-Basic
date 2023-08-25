//Object trong javascript
var emailKey = 'email';
var myInfo = {
    name: 'thanh van',
    age: 19,
    address: 'hai duong, vn',
    [emailKey]: 'van@gmail.com',
    getName: function() {
        return this.name; //hoặc myInfo.name (đặt this để dễ thay đổi tên bên ngoài)
    }
};
// myInfo['my-email'] = 'van@gmail.com'; //thêm 1 key
// var myKey = 'address';
// console.log(myInfo[myKey]);
// console.log(myInfo.getName());//thanh van

//function --> phương thức / method
//others --> thuộc tính / property