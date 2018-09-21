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
// Botão 2: remover por nome e sobrenome:
// Quando enviarmos o form identificado como formRemoveDois... significa que estamos removendo do BD
$('#formRemoveDois').submit(function(e){
	// Não deixa a página recarregar
	e.preventDefault();

	// Lê os valores do form e transforma em um array associativo
	var formData = readFromFormToArray($(this));

	ref.orderByChild("nome").equalTo(formData["inputRemoveDoisNome"]).on("value", function(data){
		var removed = 0;
		data.forEach(function(item){
			if(item.val().sobrenome === formData["inputRemoveDoisSobrenome"]){
				ref.child(item.key).remove();
				removed++;
			}
		});

		document.getElementById("removeDoisSobrenomeResult").innerHTML = removed ? "<center style='color:#00B024;'>Removi " + removed + " entradas do BD.</center>" : "<center style='color:#B02400;'>Nenhuma entrada encontrada para ser removida.</center>";

		ref.off();				
	});
});

// Botão 3: remover TUDO!
$("#buttonRemoveAll").click(function(){
	ref.set(null, function(){
		document.getElementById("removeAllResult").innerHTML = "<p style='color:#00B024;'>Removi tudo do BD.</p>";
	});
});