/* Código */
// Inicialização necessária para o Firebase..
var config = {
	apiKey: "AIzaSyA_n4fuHeyYot9hKnb0bQL7hIb2S087LU8",
	authDomain: "algumprojeto.firebaseapp.com",
	databaseURL: "https://algumprojeto.firebaseio.com",
	projectId: "algumprojeto",
	storageBucket: "algumprojeto.appspot.com",
	messagingSenderId: "977050868128"
};
firebase.initializeApp(config);
var ref = firebase.database().ref("newTrabalhadores");

/* Eventos */
// Quando enviarmos o form identificado como formAdd... significa que estamos adicionando ao BD
$('#formAdd').submit(function(e){

	// Não deixa a página recarregar
	e.preventDefault();

	// Lê os valores do form e transforma em um array associativo
	var data = readFromFormToArray($(this));

	// Atribui identificadores diferentes dos nomes dos forms
	var normalizedData = { 
		nome: data["inputAddNome"],
		sobrenome: data["inputAddSobrenome"],
		profissao: data["inputAddProfissao"],
		salario: parseInt(data["inputAddSalario"])
	};

	// Efetua o push na base de dados, ativando uma função logo em sequência
	ref.push(normalizedData, function(){
		document.getElementById("formAddResult").innerHTML = "<p style='color:#00B024;'>Push efetuado com sucesso.</p>";
	});
});