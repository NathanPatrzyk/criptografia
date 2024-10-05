let texto =
  "UVCBGRFR URHEVFGVPN R NDHRYN DHR PBZB ZRGBQB QR GENONYUB R NQBGNQN N GVGHYB CEBIVFBEVB PBZB VQRVN QVERGEVM AN CRFDHVFN QBF SNGBF FRZ N CERBPHCNPNB VAVPVNY QR FHN IREQNQR BH SNYFVQNQR";

let arrayDeTextos = decifrar(texto);
arrayDeTextos.forEach((texto) => {
  console.log(texto);
});

function decifrar(texto) {
  let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let alfabetoDuplicado = alfabeto.concat(alfabeto);

  let alfabetoNovo = "";
  let arrayDeAlfabetos = [];
  let textoNovo = "";
  let arrayDeTextos = [];

  alfabeto = alfabeto.split("");
  alfabetoDuplicado = alfabetoDuplicado.split("");
  texto = texto.split("");

  for (let j = 1; j < alfabeto.length; j++) {
    for (let i = 0; i < alfabeto.length; i++) {
      let letra = alfabetoDuplicado[i + j];
      alfabetoNovo = alfabetoNovo.concat(letra);
    }
    arrayDeAlfabetos.push(alfabetoNovo);
    alfabetoNovo = "";
  }

  for (let j = 0; j < alfabeto.length - 1; j++) {
    for (let i = 0; i < texto.length; i++) {
      let index = alfabeto.indexOf(texto[i]);
      index == -1
        ? (textoNovo += " ")
        : (textoNovo += arrayDeAlfabetos[j][index]);
    }
    arrayDeTextos.push(textoNovo);
    textoNovo = "";
  }

  return arrayDeTextos;
}
