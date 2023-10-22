

let productos = [];

fetch("./js/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
    })

//constantes que extraen los elementos del document

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");


//funcion que se encarga de generar los productos (foreach)

function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML = " ";

    //el forEach va a leer en orden los productos(json)

    productosElegidos.forEach(producto => {
        const div = document.createElement("div");

    // luego de crear el div dentro del padre (#contenedor-productos) con innerHTML va a incorporar la estructura del div de los productos.

        div.innerHTML = `
        <div class="card" style="border: none; width: 13rem;">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.titulo}">
        <div class="producto-esp card-body producto-card text-white">
        <img src="${producto.marca}" class="card-img-top producto-marca" alt="">
          <h5 class="producto-titulo card-title">${producto.titulo}</h5> 
          <p class="producto-precio">$${producto.precio}</p>
          
          <button class="producto-agregar col-12" id="${producto.id}">agregar</button>
        </div>
      </div>
        `;
// los datos son del array creado con la lista de productos
        contenedorProductos.append(div);
    });
    
}

// aca se filtra el contenido de mujer u hombre

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");
        //comprobacion de un if si el id selccionado de los botones no es igual a "todos"
        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});
