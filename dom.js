// // console.log('Hello')
// console.log(document.domain);
// console.log(document.title);
// console.log(document.URL);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
console.log(document.all);
var HeaderTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000'

// var items = document.getElementsByClassName('list-group-item');
// // console.log(items);
// // for (var i = 0; i < items.length; i++) {
// //     items[i].style.fontWeight = 'bold';
// //     items[i].style.color = "green";
// // }
// items[2].style.backgroundColor = "green";
// for (var i = 0; i < items.length; i++) {
//     items[i].style.fontWeight = 'bold';

var li = document.getElementsByTagName('li');
li[4].style.fontWeight = "bold";
li[4].style.backgroundColor = "yellow";
