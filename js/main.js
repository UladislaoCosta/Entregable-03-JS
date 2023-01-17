document.title = "Apple Store";
//querySelector
const titulo = document.querySelector("h1 span"),
  tituloSecundario = document.querySelector("h2#secundario");

titulo.innerText = "Tienda Apple";
tituloSecundario.innerText = "Productos";
//Array Productos
const productos = [
  { id: 1, nombre: "Apple Watch", precio: 500, img: "apple-watch.jpg" },
  { id: 2, nombre: "Airpods", precio: 160, img: "airpods.webp" },
  { id: 3, nombre: "Airpods Max", precio: 240, img: "airpods-max.webp" },
  { id: 4, nombre: "Iphone XR", precio: 700, img: "iphone-xr.webp" },
  { id: 5, nombre: "Iphone 11", precio: 870, img: "iphone-11.webp" },
  { id: 6, nombre: "Iphone 12", precio: 990, img: "iphone-12.jpg" },
  { id: 7, nombre: "Iphone 13", precio: 1130, img: "iphone-13.jpeg" },
  {
    id: 8,
    nombre: "Macbook",
    precio: 1300,
    img: "macbook.jpeg",
  },
  {
    id: 9,
    nombre: "Macbook Pro",
    precio: 1550,
    img: "macbook-pro.jpg",
  },
];

let cotizacionActual = 1;

const paises = {
    "Estados Unidos": 1,
    Argentina: 350,
    Colombia: 4721,
    Brasil: 5,
    México: 18,
    Uruguay: 40,
    Venezuela: 248567, 
    Perú: 4,
    Chile: 815,
}

// const paises = [
//   "Argentina",
//   "Colombia",
//   "Brasil",
//   "México",
//   "Uruguay",
//   "Venezuela",
//   "Perú",
//   "Chile",
//   "Polonia",
//   "Francia",
//   "Australia",
// ];

//funciones de busqueda
function buscarProducto(arr, filtro) {
  const encontrado = arr.find((el) => {
    return el.nombre.includes(filtro);
  });
  return encontrado;
}
function filtrarProducto(arr, filtro) {
  const filtrado = arr.filter((el) => {
    return el.nombre.includes(filtro);
  });
  return filtrado;
}
const contenedor = document.querySelector("#contenedor");

function crearHtml(el) {
  
  contenedor.innerHTML = "";

  let html = `<div class="card">
                <img src=" ./img/${el.img}" alt="${el.nombre}">
                <hr>
                <h3>${el.nombre}</h3>
                <p>Precio: $${el.precio} USD </p>
                  <div class="card-action">
                    <button id="${el.id}">Comprar</button>
                  </div>
              </div>`;

  contenedor.innerHTML = html;
}


const input = document.querySelectorAll('input[type="text"]'),
  btnSearch = document.querySelector("#btnSearch");

btnSearch.addEventListener("click", () => {
  //codigo a ejecutar
  const encontrado = buscarProducto(productos, input[0].value);
  console.log(encontrado);
  crearHtml(encontrado);
});
input[0].addEventListener("input", () => {
  //codigo a ejecutar
  const encontrado = buscarProducto(productos, input[0].value);
  console.log(encontrado);
  crearHtml(encontrado);
});

let selectPaisElement = document.querySelector('#selectPais');


Object.keys(paises).forEach((pais) => {
  let option = document.createElement("option");
  option.value = pais;
  option.innerText = pais;

  selectPaisElement.appendChild(option);
});

selectPaisElement.addEventListener("change", () => {
  let opcion = selectPaisElement.options[selectPaisElement.selectedIndex].value;
  const encontrado = buscarProducto(productos, input[0].value);
  console.log(encontrado);

  console.log(encontrado.precio);

 cotizacionActual = paises[opcion] * encontrado.precio;

  document.querySelector("#info").innerText = `País seleccionado: ${opcion}. Cotización en su moneda: ${cotizacionActual}`;
});




