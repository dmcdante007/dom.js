var form = document.getElementById('addForm');
var itemList = document.getElementById('items');



form.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault();
    // console.log(1);

    // Input value
    var newItem = document.getElementById('item').value;
    var item_2 = document.getElementById('item2').value;

    // Create new li element
    var li = document.createElement('li');
    //add class
    li.className = 'list-group-item';

    //Add text node with input value
    li.appendChild(document.createTextNode(newItem + " " + item_2));
    // li.appendChild(document.createTextNode(item_2))

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

var add_input = document.createElement("input");

add_input.className = "form-control mr-2";
add_input.id = "item2";
add_input.type = "text";

// console.log(add_input);
var container = document.querySelector('form');
var bef = container.lastElementChild
// console.log(container)
// console.log(bef)

container.insertBefore(add_input, bef);


//CREATE A FILTER TO ADD AN EVENT LISTENER 
var filter = document.getElementById('filter');
console.log(filter);

filter.addEventListener('keyup', filterItems); //KEY UP AND FUNCTION NAME

function filterItems(e) {
    //conveting to lower case
    var text = e.target.value.toLowerCase();
    // console.log(text)
    var items = itemList.getElementsByTagName('li');//getLis
    // console.log(items);
    // //convert to an array
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        // console.log(itemName)
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';

        } else {
            item.style.display = 'none';
        }

    });
