/*
Hàm trong javascript
1.Hàm
    -1 khối mã
    -Làm 1 việc cụ thể
2.Loại hàm
    -Built-in
    -Tự định nghĩa
3.Tính chất 
    -K thực thi khi định nghĩa
    -Sẽ thực thi khi dc gọi
    -Có thể nhận tham số
    -Có thể trả về 1 gt
4.Tạo hàm đầu tiên
*/
// function writeLog(mess1){
//     if(mess1){
//         console.log(mess1);
//     }
//     if(mess2){
//         console.log(mess2);
//     }
// }
// writeLog('Log1','Log2')

/* 
1.Khi function trùng tên: f sau ghi đè lên f trc
2.Khai báo biến trong hàm
3.Định nghĩa hàm trong hàm
*/

function show() {
    function show2(){
        console.log('message2');
    }
    show2();
}
show();