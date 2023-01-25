let nombreDeLaBebida = prompt(
  "Ingrese el nombre de la bebida y luego si es lata o botella (Ingrese Salir si no quiere ver el costo)"
);
let costoDeLaBebida = 0;
let acumulado = 0;

while (nombreDeLaBebida !== "Salir") {
  switch (nombreDeLaBebida) {
    case "Quilmes Stout Lata":
    case "Quilmes Bock Lata":
    case "Quilmes Clasica Lata":
    case "Quilmes Red Lager Lata":
      costoDeLaBebida = 320;
      acumulado += costoDeLaBebida;
      break;

    case "Quilmes Clasica Botella":
      costoDeLaBebida = 300;
      acumulado += costoDeLaBebida;
      break;

    case "Andes Roja Lata":
    case "Andes Rubia Lata":
    case "Andes Negra Lata":
    case "Andes IPA Lata":
      costoDeLaBebida = 390;
      acumulado += costoDeLaBebida;
      break;

    case "Patagonia Weisse Lata":
    case "Patagonia Kune Lata":
    case "Patagonia Bohemia Pilsner Lata":
    case "Patagonia IPA Lata":
      costoDeLaBebida = 410;
      acumulado += costoDeLaBebida;
      break;

    case "Patagonia Weisse Botella":
    case "Patagonia Bohemia Pilsner Botella":
    case "Patagonia Amber Botella":
      costoDeLaBebida = 700;
      acumulado += costoDeLaBebida;
      break;

    case "Stella Artois Lata":
      costoDeLaBebida = 460;
      acumulado += costoDeLaBebida;
      break;

    case "Stella Artois Botella":
      costoDeLaBebida = 700;
      acumulado += costoDeLaBebida;
      break;
  }

  console.log("El costo de la bebida es: $" + costoDeLaBebida);

  nombreDeLaBebida = prompt(
    "Ingrese el nombre de la bebida y luego si es lata o botella (Ingrese Salir si no quiere ver el costo)"
  );
}

if (acumulado > 0) {
  totalBebida = acumulado + acumulado * 0.21;
  console.log("El total es: $" + totalBebida);
}
