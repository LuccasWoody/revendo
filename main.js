const form = document.getElementById('form-campos');


form.addEventListener('submit',function(e) {
    e.preventDefault();

	const InputA = document.getElementById('CampoA');
	const InputB = document.getElementById('CampoB');

	const mensagemSucesso = `O número B é maior que o número A.`
    const mensagemReprovado = `Não valido.`

    const valorA = parseFloat(InputA.value);
    const valorB = parseFloat(InputB.value);


	if (valorB > valorA) {
	alert(mensagemSucesso);

	
	InputA.value = '';
	InputB.value = '';
	} else {
	 alert(mensagemReprovado);
 
    }     
});

