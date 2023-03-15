const body = document.querySelector("body"),
  sidebar = body.querySelector("nav"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerText = "Light mode";
  } else {
    modeText.innerText = "Dark mode";
  }
});

/** Class */
class Producto {
  constructor(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
}

/** Function*/
function renderizarListaDeProductos(listaDeProductos) {
  for (const productoDeLista of listaDeProductos) {
    console.log(productoDeLista);
  }
}

function obtenerProductosDelJSON() {
  fetch("/productos.json")
    .then((Response) => {
      return Response.json();
    })
    .then((productosJSON) => {
      for (const productoJSON of productosJSON) {
        productosJSON.push(
          new Producto(
            productoJSON.nombre,
            productoJSON.precio,
            productoJSON.stock
          )
        );
      }
      renderizarListaDeProductos(productos);
    });
}

/** Inico */

const listaDeProductos = document.getElementById("listaDeProductos");

let productos = [];

obtenerProductosDelJSON();

// let carrito = [];

// let cervezasArrays = [
//   {
//     id: 1,
//     marca: "Quilmes",
//     sabor: "Stout",
//     envase: "Lata",
//     cantidad: 1,
//     precio: 320,
//     total: 0,
//   },
//   {
//     id: 2,
//     marca: "Quilmes",
//     sabor: "Stout",
//     envase: "Botella",
//     cantidad: 1,
//     precio: 300,
//     total: 0,
//   },
//   {
//     id: 3,
//     marca: "Quilmes",
//     sabor: "Red Lager",
//     envase: "Lata",
//     cantidad: 1,
//     precio: 320,
//     total: 0,
//   },
//   {
//     id: 4,
//     marca: "Quilmes",
//     sabor: "Red Lager",
//     envase: "Botella",
//     cantidad: 1,
//     precio: 300,
//     total: 0,
//   },
//   {
//     id: 5,
//     marca: "Quilmes",
//     sabor: "Clasica",
//     envase: "Lata",
//     cantidad: 1,
//     precio: 320,
//     total: 0,
//   },
//   {
//     id: 6,
//     marca: "Quilmes",
//     sabor: "Bock",
//     envase: "Lata",
//     cantidad: 1,
//     precio: 320,
//     total: 0,
//   },
//   {
//     id: 7,
//     marca: "Quilmes",
//     sabor: "Clasica",
//     envase: "Botella",
//     cantidad: 1,
//     precio: 300,
//     total: 0,
//   },
//   {
//     id: 8,
//     marca: "Andes",
//     sabor: "Roja",
//     envase: "Lata",
//     cantidad: 1,
//     precio: 390,
//     total: 0,
//   },
//   {
//     id: 9,
//     marca: "Andes",
//     sabor: "Negra",
//     envase: "Lata",
//     cantidad: 1,
//     precio: 390,
//     total: 0,
//   },
//   {
//     id: 10,
//     marca: "Andes",
//     sabor: "Rubia",
//     envase: "Lata",
//     cantidad: 1,
//     precio: 390,
//     total: 0,
//   },
//   {
//     id: 11,
//     marca: "Andes",
//     sabor: "IPA",
//     envase: "Lata",
//     cantidad: 1,
//     precio: 390,
//     total: 0,
//   },
//   {
//     id: 12,
//     marca: "Patagonia",
//     sabor: "Weisse",
//     envase: "Lata",
//     cantidad: 1,
//     precio: 410,
//     total: 0,
//   },
//   {
//     id: 13,
//     marca: "Patagonia",
//     sabor: "Weisse",
//     envase: "Botella",
//     cantidad: 1,
//     precio: 700,
//     total: 0,
//   },
//   {
//     id: 14,
//     marca: "Patagonia",
//     sabor: "Kune",
//     envase: "Lata",
//     cantidad: 1,
//     precio: 410,
//     total: 0,
//   },
//   {
//     id: 15,
//     marca: "Stella",
//     sabor: "Kune",
//     envase: "Botella",
//     cantidad: 1,
//     precio: 700,
//     total: 0,
//   },
//   {
//     id: 16,
//     marca: "Patagonia",
//     sabor: "Bohemia Pilsner",
//     envase: "Lata",
//     cantidad: 1,
//     precio: 410,
//     total: 0,
//   },
//   {
//     id: 17,
//     marca: "Patagonia",
//     sabor: "Bohemia Pilsner",
//     envase: "Botella",
//     cantidad: 1,
//     precio: 700,
//     total: 0,
//   },
//   {
//     id: 18,
//     marca: "Patagonia",
//     sabor: "IPA",
//     envase: "Lata",
//     cantidad: 1,
//     precio: 410,
//     total: 0,
//   },
//   {
//     id: 19,
//     marca: "Patagonia",
//     sabor: "IPA",
//     envase: "Botella",
//     cantidad: 1,
//     precio: 700,
//     total: 0,
//   },
//   {
//     id: 20,
//     marca: "Patagonia",
//     sabor: "Amber",
//     envase: "Lata",
//     cantidad: 1,
//     precio: 460,
//     total: 0,
//   },
//   {
//     id: 21,
//     marca: "Patagonia",
//     sabor: "Amber",
//     envase: "Botella",
//     cantidad: 1,
//     precio: 700,
//     total: 0,
//   },
// ];

// const cervezasJSON = JSON.stringify(cervezasArrays);

// localStorage.setItem("cervezas", cervezasJSON);

// console.log(cervezasJSON);

// let opciones = Number();
// prompt(`Elija una bebida segun una opción disponible:
//                   1- ${cervezasArrays[0].marca} - ${cervezasArrays[0].sabor} - ${cervezasArrays[0].envase}
//                   2- ${cervezasArrays[1].marca} - ${cervezasArrays[1].sabor} - ${cervezasArrays[1].envase}
//                   3- ${cervezasArrays[2].marca} - ${cervezasArrays[2].sabor} - ${cervezasArrays[2].envase}
//                   4- ${cervezasArrays[3].marca} - ${cervezasArrays[3].sabor} - ${cervezasArrays[3].envase}
//                   5- ${cervezasArrays[4].marca} - ${cervezasArrays[4].sabor} - ${cervezasArrays[4].envase}
//                   6- ${cervezasArrays[5].marca} - ${cervezasArrays[5].sabor} - ${cervezasArrays[5].envase}
//                   7- ${cervezasArrays[6].marca} - ${cervezasArrays[6].sabor} - ${cervezasArrays[6].envase}
//                   8- ${cervezasArrays[7].marca} - ${cervezasArrays[7].sabor} - ${cervezasArrays[7].envase}
//                   9- ${cervezasArrays[8].marca} - ${cervezasArrays[8].sabor} - ${cervezasArrays[8].envase}
//                   10- ${cervezasArrays[9].marca} - ${cervezasArrays[9].sabor} - ${cervezasArrays[9].envase}
//                   11- ${cervezasArrays[10].marca} - ${cervezasArrays[10].sabor} - ${cervezasArrays[10].envase}
//                   12- ${cervezasArrays[11].marca} - ${cervezasArrays[11].sabor} - ${cervezasArrays[11].envase}
//                   13- ${cervezasArrays[12].marca} - ${cervezasArrays[12].sabor} - ${cervezasArrays[12].envase}
//                   14- ${cervezasArrays[13].marca} - ${cervezasArrays[13].sabor} - ${cervezasArrays[13].envase}
//                   15- ${cervezasArrays[14].marca} - ${cervezasArrays[14].sabor} - ${cervezasArrays[14].envase}
//                   16- ${cervezasArrays[15].marca} - ${cervezasArrays[15].sabor} - ${cervezasArrays[15].envase}
//                   17- ${cervezasArrays[16].marca} - ${cervezasArrays[16].sabor} - ${cervezasArrays[16].envase}
//                   18- ${cervezasArrays[17].marca} - ${cervezasArrays[17].sabor} - ${cervezasArrays[17].envase}
//                   19- ${cervezasArrays[18].marca} - ${cervezasArrays[18].sabor} - ${cervezasArrays[18].envase}
//                   20- ${cervezasArrays[19].marca} - ${cervezasArrays[19].sabor} - ${cervezasArrays[19].envase}
//                   21- ${cervezasArrays[20].marca} - ${cervezasArrays[20].sabor} - ${cervezasArrays[20].envase}
//       `);

// if (opciones >= 1 && opciones <= 17) {
//   carrito.push(cervezasArrays.find((bebida) => bebida.id === opciones));
//   carritoActualizado();
//   alert(JSON.stringify(carrito));
// }

// function carritoActualizado() {
//   carrito = carrito.map((bebida) => {
//     return {
//       marca: bebida.marca,
//       sabor: bebida.sabor,
//       envase: bebida.envase,
//       cantidad: bebida.cantidad,
//       total: bebida.precio * bebida.cantidad * 1.21,
//     };
//   });
// }
