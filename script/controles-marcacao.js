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

function atualizaMarcacao() {
	
	let marcacaoQuery = document.querySelector('.marcacao.selecionada');
    marcacaoQuery.style.left = document.querySelector('#x-da-marcacao').value + 'px';
    marcacaoQuery.style.top = document.querySelector('#y-da-marcacao').value + 'px';
    marcacaoQuery.style.width = document.querySelector('#largura-da-marcacao').value + 'px';
    marcacaoQuery.style.height = document.querySelector('#altura-da-marcacao').value + 'px';
	
	
    marcacaoQuery.dataset.titulo = document.querySelector('#titulo-da-marcacao').value;
    marcacaoQuery.dataset.cor = document.querySelector('#cor-da-marcacao').value;
	marcacaoQuery.dataset.conteudo = document.querySelector('#conteudo-da-marcacao').value;
	
	console.log(document.querySelector('[value="formato-retangular"]').checked);
	if(document.querySelector('[value="formato-retangular"]').checked){
		marcacaoQuery.dataset.formato = "formato-retangular";
	}
	else {
		marcacaoQuery.dataset.formato = "formato-oval";
	}
	
	 
}

visivelQuery.addEventListener('change', mudaVisibilidade);

for (let componente of componentesQuery) {
	componente.addEventListener('click', atualizaControles);
}

document.addEventListener('change', atualizaMarcacao);
