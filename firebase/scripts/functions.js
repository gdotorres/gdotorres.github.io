/* Funções */
// Lê um form e transforma-o em um array associativo.
function readFromFormToArray(form){
	return form.serializeArray().reduce(function(obj, item){
    	obj[item.name] = item.value;
    	return obj;
	}, {});
}

// Função: Cria uma coluna dentro de uma linha em uma tabela html. Requer dois argumentos: tr -> o elemento html tr que indica uma linha de tabela; texto -> o texto a ser inserido na coluna da tabela.
function createTableCol(tr, texto){
	var td = document.createElement("td");
	td.innerHTML = texto;
	tr.appendChild(td);
	return tr;
}

// Função: Cria uma tabela baseada em um array montado por dados recebidos do Firebase. Requer dois argumentos: array -> o array que contém os dados; tbody -> o elemento html tbody que indica um corpo de tabela.
function firebaseToTable(array, tbody){

	// Cria uma linha com cabeçalho. As colunas serão "Nome", "Sobrenome" e "Profissão".
	var tr = document.createElement("tr");
	createTableCol(tr, "<b>Nome</b>");
	createTableCol(tr, "<b>Sobrenome</b>");
	createTableCol(tr, "<b>Profissão</b>");
	createTableCol(tr, "<b>Salário (R$)<b>");
	tbody.appendChild(tr);

	// Para cada item do array, cria uma nova linha na tabela, inserindo os elementos do BD corretamente em cada coluna.
	for(var i = 0; i < array.length; i++) {
		tr = document.createElement("tr");
		createTableCol(tr, array[i]["nome"]);
		createTableCol(tr, array[i]["sobrenome"]);
		createTableCol(tr, array[i]["profissao"]);
		createTableCol(tr, array[i]["salario"]);
		tbody.appendChild(tr);	
	}
}