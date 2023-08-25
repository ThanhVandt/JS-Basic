//DOM attributes
var headingElement = document.querySelector('h1');
headingElement.title = 'Heading';
headingElement.id = 'Heading';
headingElement.className = 'Heading';
//setter có thể thêm đc attribute k hợp lệ. vd thêm href cho h1
headingElement.setAttribute('class', 'heading');
//lấy gt của 1 attribute
headingElement.getAttribute('class');
