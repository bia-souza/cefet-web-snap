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

visivelQuery.addEventListener('change', mudaVisibilidade);

