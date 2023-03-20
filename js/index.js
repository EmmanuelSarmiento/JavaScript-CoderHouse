/** Variables */
const body = document.querySelector("body"),
  sidebar = body.querySelector("nav"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");
const listaDeProductos = document.getElementById("listaDeProductos");
let carrito = [];

cargarAddEventListener();

/** Funciones */

function cargarAddEventListener() {
  document.addEventListener("DOMContentLoaded", cargarProductos);

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

  listaDeProductos.addEventListener("click", agregarProducto);
}

function agregarProducto(e) {
  e.preventDefault(e);

  if (e.target.classList.contains("add-cart")) {
    const producto = e.target.parentElement.parentElement;

    datosProducto(producto);
  }
}

function datosProducto(producto) {
  const datosProducto = {
    id: parseInt(producto.querySelector("a").getAttribute("id")),
    titulo: producto.querySelector(".card-title").innerText,
    cantidad: 1,
    precio: Number(
      producto.querySelector(".precio").innerText.replace("$", "")
    ),
    img: producto.querySelector("img").src,
    subtotal: 0,
  };

  datosProducto.subtotal = datosProducto.precio * datosProducto.cantidad;

  // agregarAlCarrito(datosProducto);
  const existe = carrito.some((producto) => producto.id === datosProducto.id);
  //console.log(existe)
  if (existe) {
    const productos = carrito.map((producto) => {
      if (producto.id === datosProducto.id) {
        producto.cantidad++;
        producto.subtotal = producto.precio * producto.cantidad;

        return producto;
      } else {
        return producto;
      }
    });

    carrito = [...productos];
  } else {
    carrito = [...carrito, datosProducto];
  }

  console.log(carrito);
}

function cargarProductos() {
  fetch("/productos.json")
    .then((responsive) => responsive.json())
    .then((data) => obtenerProductos(data));
}

function obtenerProductos(data) {
  data.map((item) => {
    const cervezas = document.createElement("div");
    cervezas.innerHTML = `
                        <div class="card">
                          <img src="./media/${item.img}" class="card-img-top" alt="${item.titulo}"></img>
                          <div class="card-body">
                            <h6 class="card-title">${item.titulo}</h6>
                            <p class="precio">$${item.precio}</p>
                            <a href="#" id="${item.id}" class="btn btn-primary add-cart">Agregar al carrito</a>
                          </div>
                        </div>`;
    listaDeProductos.append(cervezas);
  });
}
