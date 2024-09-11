let bsti = document.getElementById("bsti_quantity");
let choklet = document.getElementById("choklet_quantity");
let felt = document.getElementById("felt_quantity");
let kandy = document.getElementById("kandy_quantity");
let monster = document.getElementById("monster_quantity");
let tbody = document.getElementById('tbody');
let data;

if(localStorage.product != null)
{
    data = JSON.parse(localStorage.product)
}
else data = [];

function Bying(nameCooke, numCooke){
    if(numCooke.value != 0 || numCooke.value != ''){
        var cart = {
            type_cooke: nameCooke,
            quantity_cooke: numCooke.value,
        }    
        data.push(cart);
    }
    localStorage.setItem(`Order`, JSON.stringify(data));
    showCart();

    numCooke.value = '';
}

function showCart(){

    let table = '';
    for(let i=0; i<data.length;i++){
        tbody.innerHTML = `<tr>
            <td>تسلسل</td>
            <td>النوع</td>
            <td>الكمية</td>
          </tr>`
        table += `
        <tr>
            <td>${i+1}</td>
            <td>${data[i].type_cooke}</th>
            <td>${data[i].quantity_cooke}</th>
            <td><button onclick="delet_data(${i})" id="delete">Delete</button></td>
        </tr>
        `;
    }

    tbody.innerHTML = table;

    if(data.length == 0) tbody.innerHTML = "لايوجد منتجات";
}
function delet_data(i){
    data.splice(i, 1);
    localStorage.product = JSON.stringify(data);
    showCart();
}
showCart();

