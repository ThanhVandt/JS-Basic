/** Toán tử so sánh
    Toán tử
    ==      --> Bằng
    !=      --> Không bằng
    >       --> Lớn hơn
    <       --> Nhỏ hơn
    >=      --> Lớn hơn hoặc bằng
    <=      --> Nhỏ hơn hoặc bằng

    ===     --> Bằng tuyệt đối(data type)
    !==     --> Khác tuyệt đối(data type)
 */

var a= 1;
var b= 2;
if(a=b){
    console.log('dk dung');
}else{
    console.log('dk sai');
}

//p2
var a=1;
var b='1';
console.log(a!==b);//true

var result = 'A' && 'B' && 'C';
console.log(result);//C
var result2 = 'A' && null && 'C';
console.log(result2);//null
var result3 = 'A' || null || 'C';
console.log(result3);//A
// && vế trái khác 6 value false thì lấy vế phải
// || vế trái khác 6 value false thì lấy luôn gt đấy