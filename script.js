//carrossel de imagens

const imagemDestaque = document.querySelector('#imagem-destaque img');
const imagemMiniaturas = document.querySelectorAll('.miniatura');

const imagemPrincipal = imagemDestaque.src;

imagemMiniaturas.forEach(miniatura => {
    miniatura.addEventListener('mouseover', () => {
        imagemDestaque.src = miniatura.src;
    });

    miniatura.addEventListener('mouseout', () => {
        imagemDestaque.src = imagemPrincipal;
    });
});


//add produto ao carrinho

const adicionarBtn = document.getElementById('carrinho-btn');
const inputQtd = document.getElementById('quantidade');
const carrinhoQtd = document.getElementById('carrinho-qtd');

adicionarBtn.addEventListener('click', () => {
    let addQuantidade = parseInt(inputQtd.value);
    let addCarrinho = parseInt(carrinhoQtd.textContent);

    carrinhoQtd.textContent = addCarrinho + addQuantidade;

    alert(`${addQuantidade} produto(s) adicionado(s) ao carrinho!`);

    inputQtd.value = 1;
})

