//Tham số
/*
1.Tham số?
    -Định nghĩa
    -Kiểu dl
    -Tính private
    -1 tham số
    -Nhiều tham số
2.Truyền tham số
    -1 tham số
    -Nhiều tham số
3.Arguments
    -Đối tượng arguments: bên trong function, là mảng các tham số truyền vào
    -Gthieu vòng for of
*/

function writeLog() {
    var myString = '';
    for (var param of arguments) {//ptu thứ 1 của mảng arguments gán vào param và tiếp tục lặp
        myString += `${param} - `
    }
    console.log(myString);
}
writeLog('log1','log2','log3')