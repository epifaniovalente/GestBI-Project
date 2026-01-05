const btnMenu = document.getElementById('menu-toggle');
const menuAside = document.getElementById('menuAside');

btnMenu.onclick = () => {
    menuAside.classList.toggle('open')
}

// function filtro(event) {

// }

function actualizarData(){
    window.location.reload();
}

const editarBtn = document.querySelectorAll('.editar');
editarBtn.onclick =  ()=>{
    console.log('ok');
}