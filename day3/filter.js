//filter: k lặp qua ptu rỗng
Array.prototype.filter2() = function (callback) {
    var output = [];
    for(var index in this) {
        if(this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this)
            if (result) {
                output.push(this[index]);
            }
        }
    }
    return output;
}
var courses = [
    {
        name: 'js',
        coin: 680
    },
    {
        name: 'php',
        coin: 680
    },
    {
        name: 'ruby',
        coin: 680
    }
];
