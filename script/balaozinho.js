const balaozinhoQuery = document.querySelector('#balaozinho');
console.log(balaozinhoQuery);
let marcacoesQuery = document.querySelectorAll('.marcacao');

function preencheBalao (event) {
	let marcacao = event.currentTarget;
	title = marcacao.getAttribute('data-titulo');
	content = marcacao.getAttribute('data-conteudo');
	balaozinhoQuery.innerHTML = `<h2> ${title} </h2> <p> ${content} </p>`;
	balaozinhoQuery.style.color = marcacao.getAttribute('data-cor');
}

function removeBalao () {
	balaozinhoQuery.innerHTML = '';
}

function positionBalao (e) {
	balaozinhoQuery.style.left = `${e.pageX}px`;
    balaozinhoQuery.style.top = `${e.pageY}px`;
}

for (let marcacaoQuery of marcacoesQuery){
	marcacaoQuery.addEventListener('mouseover', preencheBalao);
	marcacaoQuery.addEventListener('mouseout', removeBalao);
	marcacaoQuery.addEventListener('mousemove', positionBalao);
}


