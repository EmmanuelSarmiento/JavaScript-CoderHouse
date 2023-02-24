/**Quueria hacer un formulario de validacion de edad del cliente para que solo ingrese si es mayor,
 * lo que no me sale es esa parte de validar ese dato de la edad. Y que una vez ingrese ahi se le ejecute el array guardado en localstorage,
 * pero me sale el null en el JSON.parse el cual deje comentado para saber que esta mal en la corrección*/

const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  password: /^.{4,12}$/,
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  edad: /.\d {2}/,
};

const campos = {
  nombre: false,
  password: false,
  correo: false,
  edad: false,
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "nombre":
      validarCampo(expresiones.nombre, e.target, "nombre");
      break;
    case "password":
      validarCampo(expresiones.password, e.target, "password");
      validarPassword2();
      break;
    case "password2":
      validarPassword2();
      break;
    case "correo":
      validarCampo(expresiones.correo, e.target, "correo");
      break;
    case "edad":
      validarCampo(expresiones.edad, e.target, "edad");
      break;
  }
};

const validarCampo = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    document
      .getElementById(`grupo__${campo}`)
      .classList.remove("formulario__grupo-incorrecto");
    document
      .getElementById(`grupo__${campo}`)
      .classList.add("formulario__grupo-correcto");
    document
      .querySelector(`#grupo__${campo} i`)
      .classList.add("fa-check-circle");
    document
      .querySelector(`#grupo__${campo} i`)
      .classList.remove("fa-times-circle");
    document
      .querySelector(`#grupo__${campo} .formulario__input-error`)
      .classList.remove("formulario__input-error-activo");
    campos[campo] = true;
  } else {
    document
      .getElementById(`grupo__${campo}`)
      .classList.add("formulario__grupo-incorrecto");
    document
      .getElementById(`grupo__${campo}`)
      .classList.remove("formulario__grupo-correcto");
    document
      .querySelector(`#grupo__${campo} i`)
      .classList.add("fa-times-circle");
    document
      .querySelector(`#grupo__${campo} i`)
      .classList.remove("fa-check-circle");
    document
      .querySelector(`#grupo__${campo} .formulario__input-error`)
      .classList.add("formulario__input-error-activo");
    campos[campo] = false;
  }
};

const validarPassword2 = () => {
  const inputPassword1 = document.getElementById("password");
  const inputPassword2 = document.getElementById("password2");

  if (inputPassword1.value !== inputPassword2.value) {
    document
      .getElementById(`grupo__password2`)
      .classList.add("formulario__grupo-incorrecto");
    document
      .getElementById(`grupo__password2`)
      .classList.remove("formulario__grupo-correcto");
    document
      .querySelector(`#grupo__password2 i`)
      .classList.add("fa-times-circle");
    document
      .querySelector(`#grupo__password2 i`)
      .classList.remove("fa-check-circle");
    document
      .querySelector(`#grupo__password2 .formulario__input-error`)
      .classList.add("formulario__input-error-activo");
    campos["password"] = false;
  } else {
    document
      .getElementById(`grupo__password2`)
      .classList.remove("formulario__grupo-incorrecto");
    document
      .getElementById(`grupo__password2`)
      .classList.add("formulario__grupo-correcto");
    document
      .querySelector(`#grupo__password2 i`)
      .classList.remove("fa-times-circle");
    document
      .querySelector(`#grupo__password2 i`)
      .classList.add("fa-check-circle");
    document
      .querySelector(`#grupo__password2 .formulario__input-error`)
      .classList.remove("formulario__input-error-activo");
    campos["password"] = true;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const terminos = document.getElementById("terminos");
  if (campos.nombre && campos.password && terminos.checked) {
    formulario.reset();

    document
      .getElementById("formulario__mensaje-exito")
      .classList.add("formulario__mensaje-exito-activo");
    setTimeout(() => {
      document
        .getElementById("formulario__mensaje-exito")
        .classList.remove("formulario__mensaje-exito-activo");
    }, 5000);

    document
      .querySelectorAll(".formulario__grupo-correcto")
      .forEach((icono) => {
        icono.classList.remove("formulario__grupo-correcto");
      });
  } else {
    document
      .getElementById("formulario__mensaje")
      .classList.add("formulario__mensaje-activo");
  }
});

const calcularEdad = (fechaNacimiento) => {
  const fechaActual = new Date();
  const anoActual = parseInt(fhecaActual.getFullYear());
  const mesActual = parseInt(fhecaActual.getMonth()) + 1;
  const diaActual = parseInt(fhecaActual.getDate());

  const anoNacimiento = parseInt(String(fechaNacimiento).substring(0, 4));
  const mesNacimiento = parseInt(String(fechaNacimiento).substring(5, 7));
  const diaNacimiento = parseInt(String(fechaNacimiento).substring(8, 10));

  let edad = anoActual - anoNacimiento;
  if (mesActual < mesNacimiento) {
    edad--;
  } else if (mesActual === mesNacimiento) {
    if (diaActual < diaNacimiento) {
      edad--;
    }
  }
  return edad;
};

let carrito = [];

let cervezasArrays = [
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

const cervezasJSON = JSON.stringify(cervezasArrays);

localStorage.setItem("cervezas", cervezasJSON);

console.log(cervezasJSON);

// const cervezaJSON = localStorage.getItem("cervezasArrays");

// const cervezas = JSON.parse(cervezaJSON);

// console.log(cervezas);

let opciones = Number();
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
//                 `)

if (opciones >= 1 && opciones <= 17) {
  carrito.push(cervezasArrays.find((bebida) => bebida.id === opciones));
  carritoActualizado();
  // alert(JSON.stringify(carrito));
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
