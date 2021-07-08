let filtroQuery = document.querySelector('#filtro-da-foto');
let fotoQuery = document.querySelector('.foto-anotada > img');

function defineFiltro() {
	fotoQuery.style.filter = filtroQuery.value;
}

filtroQuery.addEventListener('change', defineFiltro);