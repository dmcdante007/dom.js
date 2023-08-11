var newDiv = document.createElement('div');
newDiv.className = 'Hello 1';
newDiv.id = 'Hello';
newDiv.setAttribute('title', 'HEllO');

var newDivtext = document.createTextNode('HEllO'); //THis will be the text in the created div
newDiv.appendChild(newDivtext);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header  h1');

container.insertBefore(newDiv, h1);


var newDiv2 = document.createElement('div');
newDiv2.className = 'List-group-item';
newDiv2.id = 'item0';
newDiv2.setAttribute('title', 'HEllO');

var text1 = document.createTextNode('HEllO Bero');
newDiv2.appendChild(text1);

// console.log(newDiv2);


var con = document.querySelector('ul');
var h2 = document.querySelector('li');

// console.log(con);
// console.log(h2);
con.insertBefore(newDiv2, h2);
