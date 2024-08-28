const d = document;
const textarea = d.querySelector(".form__input");
const munecomuneco = d.querySelector(".result__img");
const resulttitle = d.querySelector(".result__title");
const resultext = d.querySelector(".result__text");
const loadercircle = d.querySelector(".loader");
const botonencriptar = d.querySelector(".form__btn");
const botondesencriptar = d.querySelector(".form__btn--secundary");
const botoncopy = d.querySelector(".result__btn");

const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

// Función para encriptar
function encriptarmensaje(mensaje) {
    let mensajeEncriptado = "";
    for (let i = 0; i < mensaje.length; i++) {
        let letra = mensaje[i];
        let encriptada = letra;
        for (let j = 0; j < llaves.length; j++) {
            if (letra === llaves[j][0]) {
                encriptada = llaves[j][1]; // Reemplaza la letra por su equivalente encriptado
                break; // Termina el bucle cuando se encuentra la correspondencia
            }
        }
        mensajeEncriptado += encriptada;
    }
    return mensajeEncriptado;
}

// Función para desencriptar
function desencriptarmensaje(mensaje) {
    let mensajeDesencriptado = mensaje;
    for (let i = 0; i < llaves.length; i++) {
        let regex = new RegExp(llaves[i][1], 'g');
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
    }
    return mensajeDesencriptado;
}

// Ocultar elementos dinámicamente
textarea.addEventListener("input", (e) => {
    munecomuneco.style.display = "none";
    resulttitle.textContent = "capturando mensaje.";
    resultext.textContent = "";
    loadercircle.classList.remove("hidden");
});

// Función del botón Encriptar
botonencriptar.addEventListener("click", (e) => {
    e.preventDefault();
    let mensaje = textarea.value.toLowerCase();
    let mensajeEncriptado = encriptarmensaje(mensaje);
    resultext.textContent = mensajeEncriptado;
    botoncopy.classList.remove("hidden");
    resulttitle.textContent = "el resultado es:";
});

// Función del botón Desencriptar
botondesencriptar.addEventListener("click", (e) => {
    e.preventDefault();
    let mensaje = textarea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarmensaje(mensaje);
    resultext.textContent = mensajeDesencriptado;
    resulttitle.textContent = "el resultado es:";
    botoncopy.classList.remove("hidden");
});
botoncopy.addEventListener("click",()=>{
let textcopy = resultext.textContent;
navigator.clipboard.writeText(textcopy).then(()=>{
    munecomuneco.style.display= "block";
    loadercircle.classList.add("hidden");
    resulttitle.textContent = " el texto se copio";
    botoncopy.classList.add("hidde");
    resultext.textContent= ""
})
});