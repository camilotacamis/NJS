// Acessibilidade
const botaoAcessibilidade = document.getElementById('botao-acessibilidade');
const opcoesAcessibilidade = document.getElementById('opcoes-acessibilidade');

botaoAcessibilidade.addEventListener('click', function () {
    opcoesAcessibilidade.classList.toggle('apresenta-lista');
    const botaoSelecionado = botaoAcessibilidade.getAttribute('aria-expanded') === 'true';
    botaoAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado);
});

// Aumentar / Diminuir fonte
document.getElementById('aumentar-fonte').addEventListener('click', function () {
    const currentSize = parseFloat(window.getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = `${currentSize * 1.1}px`;
});

document.getElementById('diminuir-fonte').addEventListener('click', function () {
    const currentSize = parseFloat(window.getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = `${currentSize / 1.1}px`;
});

// Contraste
document.getElementById('alterna-contraste').addEventListener('click', function () {
    document.body.classList.toggle('alto-contraste');
});

 ScrollReveal().reveal('#inicio', { delay: 500 });
 ScrollReveal().reveal('#NewJeans', { delay: 500 });
 ScrollReveal().reveal('#galeria', { delay: 500 });
 ScrollReveal().reveal('#contato', { delay: 500 });
