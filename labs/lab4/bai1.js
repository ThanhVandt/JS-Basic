var main = [];
var item1 = {
    name: 'Sản Phẩm 1',
    module: 'Giày',
    cost: 123,
    quantity: 50,
};
var item2 = {
    name: 'Sản Phẩm 2',
    module: 'Áo',
    cost: 456,
    quantity: 10,
};
var item3 = {
    name: 'Sản Phẩm 3',
    module: 'Quần',
    cost: 789,
    quantity: 40,
};
main.push(item1);
main.push(item2);
main.push(item3);
function xuat(arr) {
    for (const item of arr) {
        console.log(item);
    }
}
xuat(main);
for (var i = 0; i < main.length; i++) {
    if (i == 2) {
        console.log(main[i].quantity);
    }
}
var item4 = {
    name: 'Sản Phẩm 4',
    module: 'Mũ',
    cost: 101,
    quantity: 100,
};
main.push(item4);
xuat(main);
