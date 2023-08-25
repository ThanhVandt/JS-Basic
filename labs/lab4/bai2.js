var sv = new Object();
sv.hoTen = prompt('Họ và Tên: ');
sv.diem = prompt('Nhập điểm: ');
sv.hienThi = function () {
    if (this.diem >= 5) {
        this.hocLuc = 'Giỏi';
    } else {
        this.hocLuc = 'Kém';
    }
    document.write(`<h3>Họ và tên: ${this.hoTen}</h3>`);
    document.write(`<h3>Điểm: ${this.diem}</h3>`);
    document.write(`<h3>Học lực: ${this.hocLuc}</h3>`);
};