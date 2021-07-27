//validando cpf
function validar(cpf) {
  let cpfLimpo = cpf.replace(/\D+/g, ""); // tira tudo que não é numero
  let cpfArray = Array.from(cpfLimpo);
  let cpfNumber = cpfArray.map((n) => {
    return parseInt(n);
  });

  let primeiraMult = [10, 9, 8, 7, 6, 5, 4, 3, 2];
  let autenticar = cpfNumber.slice(0, 9);
  let getPrimeiroDigito = autenticar
    .map((num, i) => {
      return num * primeiraMult[i];
    })
    .reduce((acc, valor) => {
      return acc + valor;
    }, 0);

  let primeiroDigito = 11 - (getPrimeiroDigito % 11);

  if (primeiroDigito > 9) {
    autenticar.push(0);
  } else {
    autenticar.push(primeiroDigito);
  }

  let segundaMult = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
  let getSegundoDigito = autenticar
    .map((num, i) => {
      return num * segundaMult[i];
    })
    .reduce((acc, valor) => {
      return acc + valor;
    }, 0);
  let segundoDigito = 11 - (getSegundoDigito % 11);

  if (segundoDigito > 9) {
    autenticar.push(0);
  } else {
    autenticar.push(segundoDigito);
  }

  let validacao = autenticar.join('') === cpfNumber.join('')
  console.log(autenticar.join(''))
  console.log(cpfNumber.join(''))
  return validacao;
}

let cpf = validar("705.484.450-52");
console.log(cpf);
