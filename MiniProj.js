

var itemList = document.getElementById('items');
var between1 = document.querySelector('ul');
var between2 = document.querySelector('li');


//createElement
var onit = document.getElementById('button').addEventListener('click', whatHappens);
//Save to Local Storage
// var init = document.getElementById('button').addEventListener('click', saveToLocalStorage);
function whatHappens(e) {
    e.preventDefault();

    //save to local storage
    const amount = document.getElementById('Expense').value;
    const Discrp = document.getElementById('Discrption').value;
    const cato = document.getElementById('cato').value;

    const obj = {
        amount,
        Discrp,
        cato
    };
    localStorage.setItem(obj.amount, JSON.stringify(obj));


    //Create new list element
    var li2 = document.createElement('li');
    li2.className = 'list-group-item-lg';
    li2.id = 'list-ele';
    var text = document.createTextNode(document.getElementById('Expense').value + '-' + document.getElementById('Discrption').value);

    li2.appendChild(text);

    var bet1 = document.querySelector('ul');
    var bet2 = document.querySelector('li');
    bet1.insertBefore(li2, bet2);

    //Delete button
    var but1 = document.createElement('button');
    but1.className = 'btn btn-danger btn-sm float-right delete'
    but1.id = 'del'
    var txt = document.createTextNode('Delete');
    but1.appendChild(txt);
    li2.appendChild(but1);
    //Delete button working:
    itemList.addEventListener('click', delIt); //itemList is searching  for ul
    function delIt(e) {
        // e.preventDefault();
        if (e.target.classList.contains('delete')) {
            if (confirm('Are you sure?')) {
                var li = e.target.parentElement;
                localStorage.removeItem(obj);
                itemList.removeChild(li);
            }

        }
    }


    const parentEle = document.getElementById('items');
    const childEle = document.getElementById('list-ele');
    //Working Edit Button:
    //Edit button
    var edit1 = document.createElement('button');
    edit1.type = 'button';
    edit1.id = 'edit';
    edit1.appendChild(document.createTextNode('Edit'));
    li2.appendChild(edit1);

    edit1.onclick = () => {
        localStorage.removeItem(obj.amount);
        parentEle.removeChild(childEle);
        document.getElementById('Expense').value = obj.amount;
        document.getElementById('Discrption').value = obj.Discrp;
        document.getElementById('cato').value = obj.cato;
    }

}





//Save To Local Storage
// function saveToLocalStorage(event) {
//     event.preventDefault();
//     const amount = document.getElementById('Expense').value;
//     const Discrp = document.getElementById('Discrption').value;
//     const cato = document.getElementById('cato').value;

//     const obj = {
//         amount,
//         Discrp,
//         cato
//     };
//     localStorage.setItem(obj.amount, JSON.stringify(obj));
// }
