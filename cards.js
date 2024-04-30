/**
 * Crear tarjeta
 * Crear secciones p/tarjeta
 * Img
 * Nombre, descripción, lista de algo
 * Insertar en la tarjeta
 * Mostrar dentro de div container
 * Crear funciones reutilizables
 * Funciones para crear items
 * Funciones para inyectar texto a estos items
 * Funciones para renderizar
 * Multiples usuarios
 */

const CARDS_CONTAINER = document.querySelector("#card-container");
const USERS=[
//sino utilizas getElementById, podemos usar querySelector, pero tendrías que poner un #/ hash antes del nombre del contenedor, es decir sería #card- container, en vez de .card-container

const USER ={
id: 1,
username: "User Name",
desc: "Sobre mi",
age: 26,
fav_books: {
    books: [
        "Brida",
        "Ensayo sobre la ceguera",
        "La mecanica del corazón",
        "Angeles y Demonios",
        "El principito",
    ],
},
};
const USER1 ={
    id: 2,
    username: "PapasGajo",
    desc: "Sobre mi",
    age: 28,
    fav_books: {
        books: [
            "La biblia",
            "El señor de las moscas",
            "Rebelion en la granja",
            "Cañitas",
            "El principe",
        ],
    },
    };
]


//Crear secciones
function createElement(){
    const cardObj= {
        name_section: document.createElement ("h3"),
        desc_section: document.createElement ("p"),
        age_section: document.createElement ("p"),
        book_section: document.createElement("div"),
    }
}
const card = document.createElement ("div");
const name_section = document.createElement ("h3");
const desc_section = document.createElement ("p");
const age_section = document.createElement ("p");

//lista ------
const bookList= USER.fav_books.books.map((e)=> {
    const item= document.createElement("ul");
    item.textContent= e;
    return item;
});

console.log(bookList)

//Crear tarjeta
//Inyectamos info
function injectData(obj, user){
    const bookList= user.fav_books.books.map((e)=> {
        const item= document.createElement("ul");
        item.textContent= e;
        return item;
    });

    obj.name_section.textContent=USER.username;
    obj.desc_section.textContent=USER.desc;
    obj.age_section.textContent=USER.age;
    obj.book_section.append(...bookList);
    renderCard(obj);
}  

function renderCard (cardObj) {
    const card= document.createElement("div");
    card.append (
        cardObj.name_section,
         cardObj.desc_section,
          cardObj.age_section,
           cardObj.book_section,
        );
    card.className= "div-creado";
    CARDS_CONTAINER.appendChild(card);
}

USERS.forEach((user) => {
    const cardData= createElements();
injectData(cardData, user);
});

