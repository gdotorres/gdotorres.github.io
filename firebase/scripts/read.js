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

var formReadAllResultTbody = document.getElementById("formReadAllResultTbody");
var formReadSalarioResultTbody = document.getElementById("formReadSalarioResultTbody");

/* Eventos */
// Botão 1: ler TUDO:
$("#buttonReadAll").click(function(){
	var array = [];
	ref.on("value", function(snapshot){
		snapshot.forEach(function(item){
			array.push(item.val());
		});

		formReadAllResultTbody.innerHTML = "";
		firebaseToTable(array, formReadAllResultTbody);
		ref.off();
	});
});

// Botão 2: ler de acordo com o salário:
$('#formReadSalario').submit(function(e){
	// Não deixa a página recarregar
	e.preventDefault();
	// Tudo que vem do form vira um array
	var data = readFromFormToArray($(this));
	// Inicialização de array vazio
	var array = [];	

	var salarioInt = parseInt(data["inputFrssSalario"]);

	// Dependendo da opção do select..
	switch(data["frssSelect"]){
		case "frssIgual":
			ref.orderByChild("salario").equalTo(salarioInt).on("value", function(snapshot){
				snapshot.forEach(function(item){
					array.push(item.val());
				});
				formReadSalarioResultTbody.innerHTML = "";
				firebaseToTable(array, formReadSalarioResultTbody);
				ref.off();
			});
			break;
		case "frssMenorQue":
			ref.orderByChild("salario").endAt(salarioInt).on("value", function(snapshot){
				snapshot.forEach(function(item){
					if(item.val().salario !== salarioInt){
						array.push(item.val());
					}
				});
				formReadSalarioResultTbody.innerHTML = "";
				firebaseToTable(array, formReadSalarioResultTbody);
				ref.off();
			});
			break;
		case "frssMenorIgualQue":
			ref.orderByChild("salario").endAt(salarioInt).on("value", function(snapshot){
				snapshot.forEach(function(item){
					array.push(item.val());
				});
				formReadSalarioResultTbody.innerHTML = "";
				firebaseToTable(array, formReadSalarioResultTbody);
				ref.off();
			});
			break;
		case "frssMaiorQue":
			ref.orderByChild("salario").startAt(salarioInt).on("value", function(snapshot){
				snapshot.forEach(function(item){
					if(item.val().salario !== salarioInt){
						array.push(item.val());
					}
				});
				formReadSalarioResultTbody.innerHTML = "";
				firebaseToTable(array, formReadSalarioResultTbody);
				ref.off();
			});
			break;
		case "frssMaiorIgualQue":
			ref.orderByChild("salario").startAt(salarioInt).on("value", function(snapshot){
				snapshot.forEach(function(item){
					array.push(item.val());
				});
				formReadSalarioResultTbody.innerHTML = "";
				firebaseToTable(array, formReadSalarioResultTbody);
				ref.off();
			});
			break;
	}
});