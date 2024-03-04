const textArea = document.querySelector('.entrada_texto');
const mensagemTitulo = document.querySelector('.mensagem h1');
const mensagemParagrafo = document.querySelector('.mensagem p');
const mensagemBotao = document.getElementById('copia');

function botaoCriptografar() {
    const textoEntrada = textArea.value.trim(); // Remover espaços em branco extras

    if (textoEntrada === '') {
        alert("Por favor, insira um texto antes de criptografar.");
        return; // Abortar a função se a textarea estiver vazia
    }

    const textoCriptografado = criptografar(textoEntrada);
    mensagemTitulo.innerText = "Texto Criptografado";
    mensagemParagrafo.innerText = textoCriptografado;
    mensagemBotao.style.display = 'block';
    ocultarImagem();
    botaoCopia();
}

function copiarTexto() {
    const textoCriptografado = mensagemParagrafo.innerText;
    navigator.clipboard.writeText(textoCriptografado)
        .then(() => {
            alert("Texto copiado para a área de transferência!");
        })
        .catch(err => {
            console.error('Erro ao copiar o texto: ', err);
        });
}

function criptografar(stringCriptografia) {
    let matriz = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringCriptografia = stringCriptografia.toLowerCase();

    for (let i = 0; i < matriz.length; i++) {
        if (stringCriptografia.includes(matriz[i][0])) {
            stringCriptografia = stringCriptografia.replaceAll(matriz[i][0], matriz[i][1]);
        }
    }

    return stringCriptografia;
}

function descriptografar() {
    const textoEntrada = textArea.value.trim(); // Remover espaços em branco extras

    if (textoEntrada === '') {
        alert("Por favor, insira um texto antes de descriptografar.");
        return; // Abortar a função se a textarea estiver vazia
    }
    const textoDescriptografado = realizarDescriptografar(textArea.value); 
    mensagemTitulo.innerText = "Texto Descriptografado";
    mensagemParagrafo.innerText = textoDescriptografado;
    mensagemBotao.style.display = 'block';
    ocultarImagem(); 
    botaoCopia();
}

function realizarDescriptografar(stringDescriptografar) {
    let matriz = [['enter', 'e'], ['imes', 'i'], ['ai', 'a'], ['ober', 'o'], ['ufat', 'u']];
    stringDescriptografar = stringDescriptografar.toLowerCase();

    for (let i = 0; i < matriz.length; i++) {
        if (stringDescriptografar.includes(matriz[i][0])) {
            stringDescriptografar = stringDescriptografar.replaceAll(matriz[i][0], matriz[i][1]);
        }
    }

    return stringDescriptografar;
}


function ocultarCopia() {
    var copia = document.getElementById('copia');
    copia.style.display = 'none';
}

ocultarCopia()


function botaoCopia() {
    var copia = document.getElementById('copia');
    copia.style.display = 'block';
}

function ocultarImagem() {
    var copia = document.getElementById('homem');
    copia.style.display = 'none';
}
