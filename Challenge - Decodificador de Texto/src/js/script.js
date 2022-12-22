
		const inputText = document.querySelector('#msgCripto');
		const msg = document.querySelector('.msg');
		const textSaida = document.querySelector('.texto-saida');
		const botaoCopiar = document.querySelector('#msgSaida');

		

		//Função para criptografar a mensagem
		function buttonCriptografar(){
			const textoEncriptado = encriptar(inputText.value);
			if(textoEncriptado == ""){
				alert("Por favor, insera o texto que será encriptado!");
				return textoEncriptado;
			}

			msg.value = textoEncriptado;
			textSaida.style.display = 'none';
			msg.style.color="red";
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

	
		function copiar(){
		
			navigator.clipboard.writeText(msg);
			
		}


		