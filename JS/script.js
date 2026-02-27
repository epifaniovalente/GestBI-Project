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

// --------- VALIDAÇÃO DO FORMULÁRIO DE VERIFICAR BI ---------

function validarBI(numeroBi) {
    if (numeroBi.length < 14 || numeroBi.length > 14) return false;
    if (!/[0-9]/.test(numeroBi)) return false;
    if (!/[A-Z]/.test(numeroBi)) return false;

    return true;
}

const select = document.getElementById("formSelect")
const numeroBI = document.getElementById("numeroBi");

function UpdateForm() {
    const numerobi = document.getElementById("numeroBi").value;

    if (numerobi) {
        select.classList.add('activo')
    } else {
        select.classList.remove('activo')
    }
}

numeroBI.addEventListener('change', UpdateForm)

function verficar(event) {
    event.preventDefault();
    const numeroBi = document.getElementById("numeroBi").value;
    const detalhe = document.getElementById("detalhe");

    const dados_cidadao = document.getElementById("dados-cidadao");
    const resutadoBi = document.getElementById("resutadoBi_id")
    const resultadoBi_titulo = document.querySelector(".resultadoBi_titulo")
    const content_res = document.querySelector(".content_res")
    const proposta = document.getElementById("proposta")
    const impossivel = document.getElementById("impossivel")
    const voltar = document.getElementById("voltar")


    let nifValido = "000000000LA000";
    let nifCaducado = "111111111LA111";

    if (validarBI(numeroBi)) {
        detalhe.classList.remove("aviso")
    } else {
        detalhe.classList.add("aviso")
    }



    // ------BI VALIDO ------- //
    if (numeroBi === nifValido) {
        dados_cidadao.classList.add("verDados")
        impossivel.classList.add("activo")
        voltar.classList.add("activo")
        verificarForm.classList.remove("activo")

        resutadoBi.classList.remove("caducado")
        resultadoBi_titulo.classList.remove("caducado-t")
        content_res.classList.remove("caducado-c")
        proposta.classList.remove("activo")

        resultadoBi_titulo.textContent = "Bilhete de Identidade Válido"
        content_res.textContent = "O seu documento ainda está no prazo de validade. Não necessita de renovação neste momento."
    }


    // ------BI CADUCADO ------- //
    if (numeroBi === nifCaducado) {
        dados_cidadao.classList.add("verDados")
        verificarForm.classList.remove("activo")
        resutadoBi.classList.add("caducado")
        resultadoBi_titulo.classList.add("caducado-t")
        content_res.classList.add("caducado-c")
        proposta.classList.add("activo")
        impossivel.classList.remove("activo")
        voltar.classList.remove("activo")

        resultadoBi_titulo.textContent = "Em via de renovação"
        content_res.textContent = "O seu bilhete de identidade já encontra-se caducado. Pode proceder a marcação."
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



// --------- PROPOSTA DE MARCACAO ----------

function espostaMarcacao(event) {
    event.preventDefault();
}



// --------------- TROCA DE FORMULARIOS ------------------

const verificarBtn = document.getElementById("verificarBtn");
const cancelarBtn = document.getElementById("cancelarBtn");
const verificarForm = document.getElementById("verificarForm")
const cancelarForm = document.getElementById("cancelarForm")
const dados_cidadao = document.getElementById("dados-cidadao");
const inputNumeroBi = document.getElementById("numeroBi").value;
const resultado = document.getElementById("resultado");
const h4 = document.getElementById("h4");
const p = document.getElementById("p");


verificarBtn.onclick = () => {
    verificarBtn.classList.add("activo")
    cancelarBtn.classList.remove("activo")
    verificarForm.classList.add("activo")
    cancelarForm.classList.remove("activo")
    dados_cidadao.classList.remove("verDados")
    const inputNumeroBi = document.getElementById("numeroBi").value = '';
}

cancelarBtn.addEventListener("click", () => {
    cancelarBtn.classList.add("activo")
    verificarBtn.classList.remove("activo")
    verificarForm.classList.remove("activo")
    cancelarForm.classList.add("activo")
    dados_cidadao.classList.remove("verDados")
    const inputNumeroRef = document.getElementById("numeroRef").value = ''
    // const resultado = document.getElementById("resultado").classList.remove; COMO REMOVER CLASSES

    resultado.classList.remove("NaoCancelado")
    resultado.classList.remove("cancelado")
})

/* ------------ BOTAO CONFIRMAR ------------ */

const confirmarMarcacao = document.getElementById("confirmarMarcacao");
confirmarMarcacao.onclick = () => {
    window.location.href = 'comprovativo.html';
}

/* ------------ BOTAO VOLATR_COMPROVATIVO ------------ */

const voltarComprovativo = document.getElementById("voltarComprovativo");
voltarComprovativo.onclick = () => {
    window.location.href = 'marcacao.html'
}