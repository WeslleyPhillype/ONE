// Função para decodificar uma mensagem com uma chave de deslocamento
function decodificarMensagem(mensagem, chave) {
    let mensagemDecodificada = "";
    for (let i = 0; i < mensagem.length; i++) {
      let charAtual = mensagem[i];
      if (charAtual.match(/[a-z]/i)) { // Verifica se o caractere é uma letra
        let charAnterior = charAtual.charCodeAt(0) - chave; // Aplica a chave de deslocamento
        if (charAtual.match(/[a-z]/) && charAnterior < 97) { // Tratamento para letras minúsculas
          charAnterior += 26;
        } else if (charAtual.match(/[A-Z]/) && charAnterior < 65) { // Tratamento para letras maiúsculas
          charAnterior += 26;
        }
        mensagemDecodificada += String.fromCharCode(charAnterior);
      } else {
        mensagemDecodificada += charAtual; // Mantém os caracteres não alfabéticos inalterados
      }
    }
    return mensagemDecodificada;
  }
  
  // Exemplo de uso
  let mensagemCodificada = "Ebiil, Tloia!";
  let chaveDeslocamento = 3;
  let mensagemDecodificada = decodificarMensagem(mensagemCodificada, chaveDeslocamento);
  console.log("Mensagem codificada: " + mensagemCodificada);
  console.log("Chave de deslocamento: " + chaveDeslocamento);
  console.log("Mensagem decodificada: " + mensagemDecodificada);
  