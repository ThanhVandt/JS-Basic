//Object constructor xd đối tượng

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
    } 
};

var author = new User('thanh', 'van', 'avt');
var user = new User('ki', 'hun', 'avt');

author.title = 'vk kh';
user.cmt = 'ck tv';

console.log(author);
console.log(user);