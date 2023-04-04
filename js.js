const shopContent = document.getElementById("shopContent")
const numerito = document.getElementById("numerito")

const productos = [
    {
        id: "vino1",
        titulo:"vino 1",
        imagen: "vino1.jpg",
        precio: 1000
    },
    {
        id: "vino2",
        titulo:"vino 2",
        imagen: "vino2.jpg",
        precio: 1500
    },
    {
        id: "vino3",
        titulo:"vino 3",
        imagen: "vino3.jpg",
        precio: 2000
    }
];

let carrito = []

    productos.forEach((producto)=> {
        let content = document.createElement("div");
        content.className = "producto-detalles"
        content.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}">
        <h3 class="producto-titulo">${producto.titulo}</h3>
        <p class="producto-precio">${producto.precio} $ </p>
        
        `
        shopContent.append(content)

        let comprar = document.createElement("button")
        comprar.innerText = "comprar"
        comprar.className = "producto-agregar"

        content.append(comprar)

        comprar.addEventListener("click", () => {
            carrito.push({
                id : producto.id,
                imagen : producto.imagen,
                titulo : producto.titulo,
                precio: producto.precio,

            })
            console.log(carrito)
            actualizarNumerito ()
            localStorage.setItem("carrito", JSON.stringify(carrito))
        })
        
       
       
    }    
    )
   
    function actualizarNumerito (){
    let nuevoNumero = carrito.length
    numerito.innerText = nuevoNumero
    }


 
    

    

    
  