const contratoUsoDeImagemABI = [
	{
		"constant": true,
		"inputs": [],
		"name": "nomeEmpresa",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "receberPeloUso",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "qualAgente",
				"type": "address"
			}
		],
		"name": "definirAgente",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "qualNomeDaEmpresa",
				"type": "string"
			}
		],
		"name": "definirNomeDaEmpresa",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
];

var contratoUsoDeImagem = web3.eth.contract(contratoUsoDeImagemABI).at("0xe0c40a9a754a5fde99524a61a51cae9f133e0510");

function obtemNomeEmpresa() {
    contratoUsoDeImagem.nomeEmpresa({from: contaUsuario, gas: 3000000, value: 0}, function (err, resultado) {
        if (err)    {
            console.log("Erro");
            console.error(err);
        } else {
            console.log("Resultado");
            let objStatus = document.getElementById("spanNomeEmpresa");
            console.log(resultado);
            objStatus.innerText = resultado;
        }
    });
}

function registrarNomeEmpresa() {
	var statusTransacao = document.getElementById("statusTransacaoNomeEmpresa");
	var nomeEmpresa = document.formNomeEmpresa.campoNomeEmpresa.value;
	contratoUsoDeImagem.definirNomeDaEmpresa(nomeEmpresa, {from: contaUsuario, gas: 3000000, value: 0}, function (err, resultado) {
        if (err)    {
            console.log("Erro");
			console.error(err);
			statusTransacao.innerHTML = "Erro: " + err;
        } else {
            console.log("Resultado");
            console.log(resultado);
            statusTransacao.innerHTML = "Sucesso: " + err;
        }
    });
}