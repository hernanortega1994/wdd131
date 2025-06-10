const yearSpan = document.getElementById("currentYear");
yearSpan.textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const title = document.querySelector('.title')
hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
    title.classList.toggle('hide');
});
const Temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Barranquilla Colombia",
        location: "Barranquilla, Colombia",
        dedicated: "2018, December, 9",
        area: 25349,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/barranquilla-colombia-temple/barranquilla-colombia-temple-1850.jpg"
    },
    {
        templeName: "Bogota Colombia",
        location: "Bogota, Colombia",
        dedicated: "1999, April, 24-26",
        area: 53500,
        imageUrl: 
        "https://churchofjesuschristtemples.org/assets/img/temples/bogota-colombia-temple/bogota-colombia-temple-7733.jpg"
    },
    {
        templeName: "Madrid Spain",
        location: "Madrid, Spain",
        dedicated: "1999, March, 20",
        area: 45800,
        imageUrl: 
        "https://churchofjesuschristtemples.org/assets/img/temples/_temp/056-Madrid-Spain-Temple.jpg"
    }
// Add more temple objects here...
];


function createTempleCard(filteredTemples){

    // document.querySelector(".principal").innerHTML = "";
    const container = document.getElementById("principal");
    container.innerHTML = "";
    

filteredTemples.forEach(temple => {
    // Crear contenedor principal
    const card = document.createElement("div");
    card.classList.add("temples");

    // Nombre
    const name = document.createElement("h2");
    name.textContent = temple.name;

    // Ubicación
    const location = document.createElement("p");
    location.textContent = `Location: ${temple.location}`;

    // Fecha de dedicación
    const dedicated = document.createElement("p");
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;

    // Área
    const area = document.createElement("p");
    area.textContent = `Area: ${temple.area}`;

    // Imagen
    const image = document.createElement("img");
    image.src = temple.imageUrl;
    image.alt = temple.templeName;
    image.loading = "lazy"; // 🔥 carga diferida nativa

    // Añadir elementos a la tarjeta
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(image);

    // Agregar tarjeta al contenedor principal
    container.appendChild(card);
    // document.querySelector(".principal").appendChild(card);
});
}

createTempleCard(Temples);
//home temples botom
let homeTemplesLink = document.querySelector("#home");
homeTemplesLink.addEventListener("click", () => {
   
    createTempleCard(Temples);

})
//old temples botom
let oldTemplesLink = document.querySelector("#old");
oldTemplesLink.addEventListener("click", () => {
    
    createTempleCard(Temples.filter(temple => parseInt (temple.dedicated.split(",")[0]) < 1900))

})


//new temples botom
let newTemplesLink = document.querySelector("#new");
newTemplesLink.addEventListener("click", () => {

    createTempleCard(Temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000))


})
//large temples botom
let largeTemplesLink = document.querySelector("#large");
largeTemplesLink.addEventListener("click", () => {

    createTempleCard(Temples.filter(temple => parseInt(temple.area) > 90000))


})
//large temples botom
let smallTemplesLink = document.querySelector("#small");
smallTemplesLink.addEventListener("click", () => {

    createTempleCard(Temples.filter(temple => parseInt(temple.area) < 10000))


})