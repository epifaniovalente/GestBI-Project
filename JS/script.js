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



// --------- VALIDAÇÃO DO FORMULÁRIO CONTACTO ---------

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
        error_name.textContent = 'Digite seu nome.';
    } else {
        error_name.textContent = '';
    }
    if (email.value === '') {
        error_email.textContent = 'Digite seu email.';
    } else {
        error_email.textContent = '';
    }


    if (assunto.value === '' || assunto.value === 0) {
        error_assunto.textContent = 'Por favor, selecione um assunto!'
    } else {
        error_assunto.textContent = ''
    }

}


// --------------- TROCA DE FORMULARIOS ------------------

const verificarBtn = document.getElementById("verificarBtn");
const cancelarBtn = document.getElementById("cancelarBtn");
const verificarForm = document.getElementById("verificarForm")
const cancelarForm = document.getElementById("cancelarForm")


verificarBtn.onclick = () => {
    verificarBtn.classList.add("activo")
    cancelarBtn.classList.remove("activo")
    verificarForm.classList.add("activo")
    cancelarForm.classList.remove("activo")
}

cancelarBtn.addEventListener("click", () => {
    cancelarBtn.classList.add("activo")
    verificarBtn.classList.remove("activo")
    verificarForm.classList.remove("activo")
    cancelarForm.classList.add("activo")
})




// --------- VALIDAÇÃO DO FORMULÁRIO DE VERIFICAR BI ---------

function validarBI(numeroBi) {
    if (numeroBi.length < 14 || numeroBi.length > 14) return false;
    if (!/[0-9]/.test(numeroBi)) return false;
    if (!/[A-Z]/.test(numeroBi)) return false;

    return true;
}

function verficar(event) {
    event.preventDefault();
    const numeroBi = document.getElementById("numeroBi").value;
    const numBi = document.querySelector(".numeroBi")
    const detalhe = document.getElementById("detalhe");

    if (validarBI(numeroBi)) {
        detalhe.classList.remove("aviso")
        numeroBi.classList.remove("aviso")
    } else {
        detalhe.classList.add("aviso")
        numBi.classList.add("aviso")
    }

}


// --------- VALIDAÇÃO DO FORMULÁRIO DE CANCELAR MARCAÇÃO ---------

function validarRef(numeroRef) {
    if (numeroRef.length < 4 || numeroRef.length > 4) return false;
    if (!/[0-9]/.test(numeroRef)) return false;

    return true;
}

function cancelar(event) {
    event.preventDefault();
    const numeroRef = document.getElementById("numeroRef").value;
    const infor_ref = document.getElementById("infor_ref");

    const resultado = document.getElementById("resultado");
    const h4 = document.getElementById("h4");
    const p = document.getElementById("p");

    // let codigo = Math.floor(1000 + Math.random() * 9000);

    let codigo = 1000;

    if (validarRef(numeroRef)) {
        infor_ref.classList.remove("aviso")
        resultado.classList.add("NaoCancelado")
        resultado.classList.add("ok")
        h4.textContent = "Referência Não Encontrada"
        p.textContent = "Verifique o número e tente novamente!"

        if (numeroRef == codigo) {
            resultado.classList.remove("NaoCancelado")
            resultado.classList.add("cancelado")
            h4.textContent = "Marcação Cancelada com sucesso"
            p.textContent = "A marcação de fulano para o dia 22 de Dezembro foi removida."
        } else {
            resultado.classList.remove("cancelado")
            resultado.classList.add("NaoCancelado")
        }
    } else {
        infor_ref.classList.add("aviso")
        resultado.classList.remove("ok")
        h4.textContent = "";
        p.textContent = "";
    }
}

