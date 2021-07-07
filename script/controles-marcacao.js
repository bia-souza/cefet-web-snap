let visivelQuery = document.querySelector('#visibilidade-das-marcacoes');
let componentesQuery = document.querySelectorAll('.marcacao');

function mudaVisibilidade() {
	for (let componente of componentesQuery) {
		if(visivelQuery.checked) {
			componente.style.display = 'none';
		}
		else {
			componente.style.display = 'block';
		}
	}
	
}

function atualizaControles(event) {
	
	let marcacaoAlvo = event.currentTarget;
	let marcacaoAtual = document.querySelector('.selecionada');

	marcacaoAtual.classList.remove('selecionada');
	marcacaoAlvo.classList.add('selecionada');

    document.querySelector('#x-da-marcacao').value = parseInt(marcacaoAlvo.style.left);
    document.querySelector('#y-da-marcacao').value = parseInt(marcacaoAlvo.style.top);
    document.querySelector('#largura-da-marcacao').value = parseInt(marcacaoAlvo.style.width);
    document.querySelector('#altura-da-marcacao').value = parseInt(marcacaoAlvo.style.height);
	
	
    document.querySelector('#titulo-da-marcacao').value = marcacaoAlvo.dataset.titulo;
    document.querySelector('#conteudo-da-marcacao').value = marcacaoAlvo.dataset.conteudo;
    document.querySelector('#cor-da-marcacao').value = marcacaoAlvo.dataset.cor;
	
	let formato = marcacaoAlvo.dataset.formato;
	
	document.querySelector(`[value="${formato}"]`).checked = true;
	
    
}
	

visivelQuery.addEventListener('change', mudaVisibilidade);

for (let componente of componentesQuery) {
	componente.addEventListener('click', atualizaControles);
}

