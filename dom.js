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
