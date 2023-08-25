/*
Kiểu dl trong js
1.Kiểu dl nguyên thủy - primitive data
    -Number
    -String
    -Boolean
    -Undefined
    -Null
    -Symbol
2.Dl phức tạp - Complex data
    -Function
    -Object
*/

//Undefined
var age;

//Null
var isNull = null;//nothing
console.log(typeof isNull); //object

//Symbol
var id=Symbol('id'); //unique
var id2=Symbol('id'); //unique

//Function
var myFunction = function(){
    alert('hi');
}

//Object type
var myObject = {
    name:'van',
    age:19,
    myFunction: function(){

    }
};

var myArray = [
    'js',
    'php',
    'ruby'
];