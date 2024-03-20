const encriptar = () => {
  let message = document.getElementById("texto").value;
  let result = document.getElementById("results");
  console.log(message);
  let codedText = message
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  console.log(codedText);
  result.textContent = codedText;
};

const desencriptar = () => {
  let message = document.getElementById("texto").value;
  let result = document.getElementById("results");
  console.log(message);
  let decodedText = message
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  console.log(decodedText);
  result.textContent = decodedText;
};
