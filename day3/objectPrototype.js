/*
Object prototype 
1.Là gì? cấu thành nên đối tượng của hàm tạo, thêm thuộc tính ngoài hàm tạo
2.Sd khi nào?
*/
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
    } 
};
User.prototype.className = 'mx';
User.prototype.getClass = function() {
    return this.className;
};
var author = new User('thanh', 'van', 'avt');
var user = new User('ki', 'hun', 'avt');
