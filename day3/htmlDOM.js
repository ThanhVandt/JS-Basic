//HTML DOM
//Document Object Model
/**
 * Có 3 thành phần
 * 1.Element: thẻ tag; get qua: id, class, tag, css selector, html collector: document.anchors
 * 2.Attribute: thuốc tính trong thẻ mở: id, class, title, ...
 * 3.Text: Chữ
 */

//Node(điểm giao nhau, điểm gồ lên trong sơ đồ)
//------------------------------------------------------------
//Javascript: browser | server (NodeJS)
//Application programing interface
///Browser: HTML -> DOM -> DOM API

var headingNode = document.getElementById('heading');
console.log({
    element: headingNode,
});