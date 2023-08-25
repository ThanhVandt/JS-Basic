//1.Element
//2.Attribute
//3.Text: innerText, textContentProperty
var headingElement = document.querySelector('.heaing');
console.log(headingElement);

//innnerText: lấy ra mỗi text node k bao gồm khoảng trắng, chỉ hiển thị những gì hthi trên trình duyệt (thuộc tính của element node)
//textContent: lấy ra text node thực sự có bao gồm khoảng trắng, kể cả code css(tồn tại trên element node)

headingElement.innerText = '<i>New heading</i>'
headingElement.textContent = '<i>New heading</i>'