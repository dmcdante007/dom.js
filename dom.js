var item = document.querySelectorAll('li');
item[1].style.color = 'Red';

var odd = document.querySelectorAll('li:nth-child(odd)');
for (var i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = 'Green';
}
