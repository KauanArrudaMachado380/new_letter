const inputEmail = document.getElementById('email');
const botaoEnviar = document.getElementById('botaoEnviar');
const mensagemErro = document.querySelector('.mensagem_erro');

botaoEnviar.disabled = true;

inputEmail.addEventListener('input', (event) => {
    event.preventDefault();
        
    if (inputEmail.value === '' || !inputEmail.value.includes('@')) {
        inputEmail.classList.add('Erro');
        mensagemErro.style.display = 'block';
        botaoEnviar.disabled = true;

    } else {
        inputEmail.classList.remove('Erro');
        mensagemErro.style.display = 'none';
        botaoEnviar.disabled = false;
    }
});


botaoEnviar.addEventListener('click', (event) => {
    event.preventDefault();
    
    if(botaoEnviar.disabled === false) {
        const email = inputEmail.value;
        console.log(email);
        
        href = 'singUpComplet.html';
        window.location.href = href;
    }
    
});

