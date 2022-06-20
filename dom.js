document.getElementById('Additem').style.fontWeight='bold';
document.getElementById('Additem').style.color='green';

//Make the 3 rd element in the list have green background color
//Make all the elements in the list have bold color font
var items=document.getElementsByClassName('list-group-item');
items[2].style.backgroundColor="green";
for(let i=0;i<items.length;i++)
{
    items[i].style.fontWeight='bold';
}

//Add a new li element without the same class Name
//And try editing it with getelementsbyclassname and then by getelementbytagname

var xyz=document.getElementsByTagName('li');

for(let i=0;i<xyz.length;i++)
{
    xyz[i].style.backgroundColor="green";
}

var lists=document.querySelector('#items')
console.log(lists.parentElement);
console.log(lists.lastElementChild);
console.log(lists.lastChild);//it gives #text
console.log(lists.children);
console.log(lists.firstChild);
console.log(lists.firstElementChild);
console.log(lists.nextSibling);
console.log(lists.firstElementChild.nextElementSibling);
console.log(lists.previousSibling);
console.log(lists.previousElementSibling);

// creating Dom elements and appending at last
var newdiv=document.createElement('li')
newdiv.innerHTML="item 5";
document.getElementById('items').appendChild(newdiv);

//inserting before

var insertionnode=document.createElement('p');
insertionnode.innerHTML='HEllo';
let position=document.getElementById('main-header');
position.insertBefore(insertionnode,position.childNodes[0]);
//----------------------(element ,postion before)----//


var insertnode=document.createElement('p');
insertnode.innerHTML='HEllo';
let newpos=document.getElementById('items');
newpos.insertBefore(insertnode,newpos.childNodes[0]);


// delete and edit functionality

let form=document.getElementById('addForm');
var itemlist=document.getElementById('items');
//form submit event
form.addEventListener("submit",myfunction);

function myfunction(e)
{
    e.preventDefault();
    let element=document.createElement('li');
    element.innerText=document.getElementById('item').value;
    element.className='list-group-item'
    let button=document.createElement('button');
    button.className="btn btn-danger btn-sm float-right delete";
    button.innerHTML='X';
    element.appendChild(button);
    document.getElementById('items').appendChild(element);


}
//form delete event
itemlist.addEventListener('click',deletes);
function deletes(e)
{
    e.preventDefault();
    if(e.target.classList.contains('delete'))
    {
        if(confirm("Are you sure ?"))
        {
                let li=e.target.parentElement;
                itemlist.removeChild(li);
        }
        
    }



}


