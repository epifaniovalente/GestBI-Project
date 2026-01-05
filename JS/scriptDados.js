/* -------------- REFERENCIA ALEATORIA -------------- */
let codigo = Math.floor(1000 + Math.random() * 9000);
const referencia = document.getElementById("referencia").textContent=`${codigo}`;

/* -------------- DATA ALEATORIA -------------- */
function calendario() {
    let diaSem='';
    let diaSemAlt='';
    const hoje = new Date();
    const ano = hoje.getFullYear();
    const mes = hoje.getMonth();
    const dia = hoje.getUTCDay();

    switch (dia) {
        case 0:
            diaSem ='Domingo'     
            break;
        case 1:
            diaSem ='Segunda-feira'     
            break;
        case 2:
            diaSem ='Terça-feira'     
            break;
        case 3:
            diaSem ='Quarta-feira'     
            break;
        case 4:
            diaSem ='Quinta-feira'     
            break;
        case 5:
            diaSem ='Sexta-feira'     
            break;
        case 6:
            diaSem ='Sábado'     
            break;
    
        default:
            diaSem ='Houve Algum Erro!'
            break;
    }

    const dataReal = document.querySelector('.dataReal').textContent=`${diaSem}, ${dia}-${mes}-${ano}`;

    /* ------------DATA ALTERNATIVA ----------------*/ 
    switch (dia + 2) {
        case 2:
            diaSemAlt ='Terça-feira'     
            break;
        case 4:
            diaSemAlt ='Quinta-feira'     
            break;
        case 6:
            diaSemAlt ='Sábado'     
            break;
        case 8:
            diaSemAlt ='Segunda-feira'     
            break;
        case 10:
            diaSemAlt ='Quarta-feira'     
            break;
        case 12:
            diaSemAlt ='Sexta-feira'     
            break;
        case 14:
            diaSemAlt ='Domingo (SystemClosed)'     
            break;
    
        default:
            diaSemAlt ='Houve Algum Erro!'
            break;
    }

    const dataAlt = document.querySelector('.dataAlt').textContent=`${diaSemAlt}, ${dia+2}-${mes}-${ano}`;
    

    const local = document.querySelector('.local').textContent='Benfica, Kifica.'
}

calendario();