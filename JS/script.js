const services_wrapper = document.getElementById("services-wrapper");
const services_details = document.getElementById("services-details");

services_wrapper.addEventListener("click", () => {
    services_details.classList.toggle('open')
})

const menu_btn = document.getElementById("menu-toggle");
const nav_menu = document.getElementById("nav-menu");

menu_btn.addEventListener('click', () => {
    nav_menu.classList.toggle('open')
})


// Fechar o menu quando clicar fora.
document.addEventListener('click', (e) => {
    const target = e.target;
    if (!nav_menu.classList.contains('open')) return;
    if (nav_menu.contains(target) || menu_btn.contains(target)) return;
    nav_menu.classList.remove('open')
})


// Fechar o menu quando clicar no Esc (Escape)

document.addEventListener('keydown', (letra) => {
    if (letra.key === 'Escape') {
        if (nav_menu.classList.contains('open')) {
            nav_menu.classList.remove('open');
        }

    }
})

// --------- VALIDAÇÃO DO FORMULÁRIO ---------

// variaveis de error
const error_name = document.getElementById("error_name");
const error_email = document.getElementById("error_email");
const error_assunto = document.getElementById("error_assunto");


function validarform(event) {
    event.preventDefault();

    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const assunto = document.getElementById('assunto');

    if (nome.value === '') {
        error_name.textContent ='Digite seu nome.';
    }else{
        error_name.textContent ='';
    }
    if (email.value === '') {
        error_email.textContent ='Digite seu email.';
    }else{
        error_email.textContent ='';
    }


    if (assunto.value === '' || assunto.value === 0) {
        error_assunto.textContent = 'Por favor, selecione um assunto!'
    } else {
        error_assunto.textContent = ''
    }

}
