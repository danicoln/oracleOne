
		const inputText = document.querySelector('.msgCripto');
		const msg = document.querySelector('.msg');
		const textSaida = document.querySelector('.texto-saida');
		const botaoCopiar = document.querySelector('#copiar');

		

		//Função para criptografar a mensagem
		function buttonCriptografar(){
			const textoEncriptado = encriptar(inputText.value);
			if(textoEncriptado == ""){
				alert("Por favor, insira o texto que será encriptado!");
				return textoEncriptado;
			}

			msg.value = textoEncriptado;
			msg.style.background="#FFFFFF"
			msg.style.color="orange"
			textSaida.style.display="none";
			botaoCopiar.style.display='block';

		}

		function encriptar(textoCriptografado){
			let arrayCodigos = [["a","ai"], ["e","enter"], ["i","imes"], ["o","ober"], ["u", "ufat"], ["aimes", "ai"]];
			
			textoCriptografado = textoCriptografado.toLowerCase();

			for(let i = 0; i < arrayCodigos.length; i++){
				if(textoCriptografado.includes(arrayCodigos[i][0])){
					textoCriptografado = textoCriptografado.replaceAll(arrayCodigos[i][0], arrayCodigos[i][1]);
				}
			}
			return textoCriptografado;

		}

		//Função para desencriptado a mensagem

		function buttonDesencriptar(){
			const textoDesencriptado = desencriptar(msg.value);
			if(textoDesencriptado ==""){
				alert("Por favor, insira o texto que será desencriptado!");
				return textoDesencriptado;
			}

			msg.value = textoDesencriptado;
			msg.style.color="orange";
			msg.style.fontSize='20px';
		}


		function desencriptar(textDesencript){
			let arrayCodigos = [["a","ai"], ["aimes", "ai"], ["e","enter"], ["i","imes"], ["o","ober"], ["u", "ufat"]];

			textDesencript = textDesencript.toLowerCase();

			for(let i = 0; i < arrayCodigos.length; i++){
				if(textDesencript.includes(arrayCodigos[i][1])){
					textDesencript = textDesencript.replaceAll(arrayCodigos[i][1], arrayCodigos[i][0]);
				}
			}

			return textDesencript;
		}

		// função copiar
		async function copiar() {
			msg.select();
		  try {
		    await navigator.clipboard.writeText(msg.value);
		    console.log('Page URL copied to clipboard');
		  } catch (err) {
		    console.error('Failed to copy: ', err);
		  }
		}

		// função para colar
		async function getClipboardContents() {
		  try {
		    const clipboardItems = await navigator.clipboard.read();
		    for (const clipboardItem of clipboardItems) {
		      for (const type of clipboardItem.types) {
		        const blob = await clipboardItem.getType(type);
		        console.log(URL.createObjectURL(blob));
		      }
		    }
		  } catch (err) {
		    console.error(err.name, err.message);
		  }
		}