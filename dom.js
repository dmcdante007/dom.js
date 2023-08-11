var form = document.getElementById('addForm');
var itemList = document.getElementById('items');



form.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault();
    // console.log(1);

    // Input value
    var newItem = document.getElementById('item').value;


    // Create new li element
    var li = document.createElement('li');
    //add class
    li.className = 'list-group-item';

    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));


    //create delete button element

    var del = document.createElement('button');

    //adding an extra button beside them
    var add = document.createElement('button');

    add.className = 'btn btn-sm float-right add'
    add.appendChild(document.createTextNode("+"));
    li.appendChild(add);

    //give clas name to del button
    del.className = 'btn btn-danger btn-sm float-right delete';
    //Giving button a name
    del.appendChild(document.createTextNode('X'));
    //Append button to li

    li.appendChild(del);

    itemList.appendChild(li);

    //Item-listner to make delte the items 
    itemList.addEventListener('click', removeItem);

    //create fuciton to removeItem

    function removeItem(e) {
        if (e.target.classList.contains('delete')) {
            if (confirm('Are you sure?')) {
                var li = e.target.parentElement;
                itemList.removeChild(li);
            }
        }
    }
}

con.insertBefore(newDiv2, h2);
