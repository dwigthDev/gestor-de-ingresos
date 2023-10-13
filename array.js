const btnDoritos = document.getElementById("btnDoritos");
const btnDetoditos = document.getElementById("btnDetoditos");
const btnclasicas = document.getElementById("btnclasicas");
const btnOregano = document.getElementById("btnOregano");
const btnTakis = document.getElementById("btnTakis");
const btnCheetos = document.getElementById("btnCheetos");

const productos = {
    takis: 12,
    doritos: 8,
    clasicas: 4,
    oregano:4,
    cheetos: 2,
    detodito:2
}

//el valor de cada producto se asignara al texto en su span correspondiente,ya que estos inicialmente  vienen vacios
const totalDoritos = document.getElementById("totalDoritos");
totalDoritos.innerHTML = productos.doritos;

const totalClasicas = document.getElementById("totalClasicas");
totalClasicas.innerHTML = productos.clasicas;

const totalOregano = document.getElementById("totalOregano");
totalOregano.innerHTML = productos.oregano;

const totalTakis = document.getElementById("totalTakis");
totalTakis.innerHTML = productos.takis;

const totalCheetos = document.getElementById("totalCheetos");
totalCheetos.innerHTML = productos.cheetos;

const totalDetodito = document.getElementById("totalDetodito");
totalDetodito.innerHTML = productos.detodito;

//funcion de venta para los doritos
btnDoritos.addEventListener("click", () => {
    const vendidosDoritos = document.getElementById("vendidosDoritos");
    // Verifica si hay suficientes doritos disponibles para vender
    if (productos.doritos > 0) {
        // Reduce el total de doritos disponibles
        productos.doritos--;
        // Actualiza el contenido del elemento vendidosDoritos con el nuevo total de doritos vendidos
        vendidosDoritos.textContent = parseInt(vendidosDoritos.textContent) + 1;
        console.log(productos);
    } else {
        console.log("No hay doritos disponibles para vender.");
    }
    return productos
});

btnclasicas.addEventListener("click", () => {
    const vendidosClasicas = document.getElementById("vendidosClasicas");
    if (productos.clasicas > 0) {
        productos.clasicas--;
        vendidosClasicas.textContent = parseInt(vendidosClasicas.textContent) + 1;
        console.log(productos);
    } else {
        console.log("No hay lays clasicas disponibles para vender.");
    }
});

btnOregano.addEventListener("click", () => {
    const vendidosOregano = document.getElementById("vendidosOregano");
    if (productos.oregano > 0) {
        productos.oregano--;
        vendidosOregano.textContent = parseInt(vendidosOregano.textContent) + 1;
        console.log(productos);
    } else {
        console.log("No hay lays oregano disponibles para vender.");
    }
});

btnTakis.addEventListener("click", () => {
    const vendidosTakis = document.getElementById("vendidosTakis");
    if (productos.takis > 0) {
        productos.takis--;
        vendidosTakis.textContent = parseInt(vendidosTakis.textContent) + 1;
        console.log(productos);
    } else {
        console.log("No hay lays takis disponibles para vender.");
    }
});

btnCheetos.addEventListener("click", () => {
    const vendidosCheetos = document.getElementById("vendidosCheetos");
    if (productos.cheetos > 0) {
        productos.cheetos--;
        vendidosCheetos.textContent = parseInt(vendidosCheetos.textContent) + 1;
        console.log(productos);
    } else {
        console.log("No hay lays cheetos disponibles para vender.");
    }
});

btnDetoditos.addEventListener("click", () => {
    const vendidosDetoditos = document.getElementById("vendidosDetodito");
    if (productos.detodito > 0) {
        productos.detodito--;
        vendidosDetoditos.textContent = parseInt(vendidosDetoditos.textContent) + 1;
        console.log(productos);
    } else {
        console.log("No hay lays detoditos disponibles para vender.");
    }
    return productos
});
// mostrar inventario
const inv = document.getElementById("inv");
inv.addEventListener("click",()=>{
    document.getElementById("doritos").innerHTML = productos.doritos;
    document.getElementById("clasicas").innerHTML = productos.clasicas;
    document.getElementById("oregano").innerHTML = productos.oregano;
    document.getElementById("takis").textContent = productos.takis;
    document.getElementById("cheetos").textContent = productos.cheetos;
    document.getElementById("detodito").textContent = productos.detodito;

});




