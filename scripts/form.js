const yearSpan = document.getElementById("currentYear");
yearSpan.textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

// Obtener el <select> del DOM
const selectElement = document.getElementById("productSelect");

// Recorrer el array y crear las opciones
products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;        // usar el id como valor
    option.textContent = product.name; // mostrar el nombre
    selectElement.appendChild(option);
});