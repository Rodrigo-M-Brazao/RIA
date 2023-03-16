function allowDrop(ev){
    ev.preventDefault();
}

function drag(ev){
    ev.dataTransfer.setData('text', ev.target.id);
}


// const div = document.getElementById('div1');

// div.addEventListener('dragstart', drag)
function drop(ev){
    ev.preventDefault();
    let data = ev.dataTransfer.getData('text')
    ev.target.appendChild(document.getElementById(data));
    let textContent = document.getElementById(data).innerText;
    sessionStorage.setItem(`Dropped${textContent}`, textContent)
}

let array = [];
let ul = document.getElementById('lista-compras');
let text = document.getElementById('item');
function criarLi(content){
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(content));
    let test = Math.floor(Math.random() * 100) + 1
    li.setAttribute('draggable', 'true');
    li.setAttribute('ondragstart','drag(event)');
    li.setAttribute('id', `li${test}`);
    ul.appendChild(li);
}
function adicionaItem(ev){
    ev.preventDefault();
    sessionStorage.setItem(text.value, text.value);
    criarLi(text.value);
    array.push(sessionStorage.setItem(text.value, text.value));
}
function carregaItem(){
    array.forEach(li => {
        criarLi(li);
    })
}


text.onkeyup(function(e){
    e.preventDefault();
    if(e.key === "Enter"){
        adicionaItem(e)
    }
    

})
