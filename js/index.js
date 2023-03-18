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

let listaDeProductos = document.getElementById("listaDeProductos");

fetch("/productos.json")
  .then((responsive) => responsive.json())
  .then((data) => {
    data.map((item) => {
      const cervezas = document.createElement("div");
      cervezas.innerHTML = `
      <div class="col">
        <div class="card">
          <img src="./media/${item.img}" class="card-img-top" alt="${item.titulo}"></img>
          <div class="card-body">
            <h6 class="card-title">${item.titulo}</h6>
            <p class="precio">$${item.precio}</p>
            <a href="#" class="btn btn-primary">Agregar al carrito</a>
          </div>
        </div>
      </div>`;
      listaDeProductos.append(cervezas);
    });
  });
