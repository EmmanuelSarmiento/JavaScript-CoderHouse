let carrito = [];

let bebidasArrays = [
  {
    id: 1,
    marca: "Quilmes",
    sabor: "Stout",
    envase: "Lata",
    cantidad: 1,
    precio: 320,
    total: 0,
  },
  {
    id: 2,
    marca: "Quilmes",
    sabor: "Red Lager",
    envase: "Lata",
    cantidad: 1,
    precio: 320,
    total: 0,
  },
  {
    id: 3,
    marca: "Quilmes",
    sabor: "Clasica",
    envase: "Lata",
    cantidad: 1,
    precio: 320,
    total: 0,
  },
  {
    id: 4,
    marca: "Quilmes",
    sabor: "Bock",
    envase: "Lata",
    cantidad: 1,
    precio: 320,
    total: 0,
  },
  {
    id: 5,
    marca: "Quilmes",
    sabor: "Clasica",
    envase: "Botella",
    cantidad: 1,
    precio: 300,
    total: 0,
  },
  {
    id: 6,
    marca: "Andes",
    sabor: "Roja",
    envase: "Lata",
    cantidad: 1,
    precio: 390,
    total: 0,
  },
  {
    id: 7,
    marca: "Andes",
    sabor: "Negra",
    envase: "Lata",
    cantidad: 1,
    precio: 390,
    total: 0,
  },
  {
    id: 8,
    marca: "Andes",
    sabor: "Rubia",
    envase: "Lata",
    cantidad: 1,
    precio: 390,
    total: 0,
  },
  {
    id: 9,
    marca: "Andes",
    sabor: "IPA",
    envase: "Lata",
    cantidad: 1,
    precio: 390,
    total: 0,
  },
  {
    id: 10,
    marca: "Patagonia",
    sabor: "Weisse",
    envase: "Lata",
    cantidad: 1,
    precio: 410,
    total: 0,
  },
  {
    id: 11,
    marca: "Patagonia",
    sabor: "Kune",
    envase: "Lata",
    cantidad: 1,
    precio: 410,
    total: 0,
  },
  {
    id: 12,
    marca: "Patagonia",
    sabor: "Bohemia Pilsner",
    envase: "Lata",
    cantidad: 1,
    precio: 410,
    total: 0,
  },
  {
    id: 13,
    marca: "Patagonia",
    sabor: "IPA",
    envase: "Lata",
    cantidad: 1,
    precio: 410,
    total: 0,
  },
  {
    id: 14,
    marca: "Patagonia",
    sabor: "Weisse",
    envase: "Botella",
    cantidad: 1,
    precio: 700,
    total: 0,
  },
  {
    id: 15,
    marca: "Patagonia",
    sabor: "Bohemia Pilsner",
    envase: "Botella",
    cantidad: 1,
    precio: 700,
    total: 0,
  },
  {
    id: 16,
    marca: "Patagonia",
    sabor: "Amber",
    envase: "Botella",
    cantidad: 1,
    precio: 700,
    total: 0,
  },
  {
    id: 17,
    marca: "Stella",
    sabor: "Amber",
    envase: "Lata",
    cantidad: 1,
    precio: 460,
    total: 0,
  },
  {
    id: 18,
    marca: "Stella",
    sabor: "Amber",
    envase: "Botella",
    cantidad: 1,
    precio: 700,
    total: 0,
  },
];

let opciones = Number(
  prompt(`Elija una bebida segun una opción disponible: 
                    1- ${bebidasArrays[0].marca} - ${bebidasArrays[0].sabor} - ${bebidasArrays[0].envase}
                    2- ${bebidasArrays[1].marca} - ${bebidasArrays[1].sabor} - ${bebidasArrays[1].envase}
                    3- ${bebidasArrays[2].marca} - ${bebidasArrays[2].sabor} - ${bebidasArrays[2].envase}
                    4- ${bebidasArrays[3].marca} - ${bebidasArrays[3].sabor} - ${bebidasArrays[3].envase}
                    5- ${bebidasArrays[4].marca} - ${bebidasArrays[4].sabor} - ${bebidasArrays[4].envase}
                    6- ${bebidasArrays[5].marca} - ${bebidasArrays[5].sabor} - ${bebidasArrays[5].envase}
                    7- ${bebidasArrays[6].marca} - ${bebidasArrays[6].sabor} - ${bebidasArrays[6].envase}
                    8- ${bebidasArrays[7].marca} - ${bebidasArrays[7].sabor} - ${bebidasArrays[7].envase}
                    9- ${bebidasArrays[8].marca} - ${bebidasArrays[8].sabor} - ${bebidasArrays[8].envase}
                    10- ${bebidasArrays[9].marca} - ${bebidasArrays[9].sabor} - ${bebidasArrays[9].envase}
                    11- ${bebidasArrays[10].marca} - ${bebidasArrays[10].sabor} - ${bebidasArrays[10].envase}
                    12- ${bebidasArrays[11].marca} - ${bebidasArrays[11].sabor} - ${bebidasArrays[11].envase}
                    13- ${bebidasArrays[12].marca} - ${bebidasArrays[12].sabor} - ${bebidasArrays[12].envase}
                    14- ${bebidasArrays[13].marca} - ${bebidasArrays[13].sabor} - ${bebidasArrays[13].envase}
                    15- ${bebidasArrays[14].marca} - ${bebidasArrays[14].sabor} - ${bebidasArrays[14].envase}
                    16- ${bebidasArrays[15].marca} - ${bebidasArrays[15].sabor} - ${bebidasArrays[15].envase}
                    17- ${bebidasArrays[16].marca} - ${bebidasArrays[16].sabor} - ${bebidasArrays[16].envase}
                    18- ${bebidasArrays[17].marca} - ${bebidasArrays[17].sabor} - ${bebidasArrays[17].envase}
                  `)
);

if (opciones >= 1 && opciones <= 17) {
  carrito.push(bebidasArrays.find((bebida) => bebida.id === opciones));
  carritoActualizado();
  alert(JSON.stringify(carrito));
}

function carritoActualizado() {
  carrito = carrito.map((bebida) => {
    return {
      marca: bebida.marca,
      sabor: bebida.sabor,
      envase: bebida.envase,
      cantidad: bebida.cantidad,
      total: bebida.precio * bebida.cantidad * 1.21,
    };
  });
}
