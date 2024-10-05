let texto =
  "HIPOTESE HEURISTICA E AQUELA QUE COMO METODO DE TRABALHO E ADOTADA A TITULO PROVISORIO COMO IDEIA DIRETRIZ NA PESQUISA DOS FATOS SEM A PREOCUPACAO INICIAL DE SUA VERDADE OU FALSIDADE";
let deslocamento = 13;

let textoCifrado = cifrar(texto, deslocamento);
console.log(textoCifrado);

function cifrar(texto, deslocamento) {
  let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let alfabetoDuplicado = alfabeto.concat(alfabeto);

  let alfabetoNovo = "";
  let textoNovo = "";

  alfabeto = alfabeto.split("");
  alfabetoDuplicado = alfabetoDuplicado.split("");
  texto = texto.split("");

  for (let i = 0; i < alfabeto.length; i++) {
    let letra = alfabetoDuplicado[i + deslocamento];
    alfabetoNovo = alfabetoNovo.concat(letra);
  }

  for (let i = 0; i < texto.length; i++) {
    let index = alfabeto.indexOf(texto[i]);
    index == -1 ? (textoNovo += " ") : (textoNovo += alfabetoNovo[index]);
  }

  return textoNovo;
}
