//forEach k return. khác với for vì nó chỉ duyệt qua các ptu thực (khác empty)

//Học lại obj prototype
Array.prototype.forEach2 = function(callback){
    for(var index in this) {
        if(this.hasOwnProperty(index)){
            callback(this[index], index, this);
        }
    }
}
// var courses = [
//     'js',
//     'php',
//     'ruby'
// ];

var courses = new Array();
courses.forEach2(function(course, index, array){
    console.log(course, index, array);
});