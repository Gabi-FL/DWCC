// 1. Seleccionar elementos.

/////////////////// CONSTANTES /////////////////////

const nombre = document.getElementById("nombre"); // getElementById
const profesion = document.getElementById("profesion"); // getElementById
const descripcion = document.getElementById("descripcion"); // ... resto de elementos
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const ciudad = document.getElementById("ciudad");
const infoExtra = document.getElementById("info-extra");
const mensajeFooter = document.getElementById("mensaje-footer");
const botonNombre = document.querySelector("#btn-cambiar-nombre");
const botonProfesion = document.querySelector("#btn-cambiar-profesion");
const botonDescripcion = document.querySelector("#btn-editar-desc");
const botonAnadirHabilidad = document.querySelector("#btn-añadir-habilidad");
const listaHabilidades = document.querySelector("#lista-habilidades");
const botonOcultarHabilidades = document.querySelector(
  "#btn-ocultar-habilidades"
);
const botonTema = document.querySelector("#btn-tema");
const body = document.querySelector("body");
const botonInfoExtra = document.querySelector("#btn-mostrar-info");
const botonEmail = document.querySelector("#btn-cambiar-email");

// 2. Función para cambiar el nombre usar prompt(), textContent, setAttribute()

///////////////////////// FUNCIONES ///////////////////////////
function cambiarNombre() {
  const nuevoNombre = prompt("Introduce el nuevo nombre: ");
  if (nuevoNombre.trim() !== "") {
    nombre.textContent = nuevoNombre;
    nombre.setAttribute("data-usuario", nuevoNombre);
    console.log(
      'Nombre almacenado en atributo: ${nombre.getAttribute("data-usuario")}'
    );
    mensajeFooter.innerHTML = `Nombre actualizado! Bienvenide <strong>${nuevoNombre}</strong>`;
    setTimeout(() => {
      mensajeFooter.textContent = "Perfil creado con JavaScript";
    }, 5000);
  }
}

// 3. Función para cambiar la profesión
// usar prompt(), textContent

function cambiarProfesion() {
  const nuevaProfesion = prompt("Introduce la nueva profesión: ");
  if (nuevaProfesion.trim() !== "") {
    profesion.textContent = nuevaProfesion;
  }
}

// 4. Función para editar descripción
// usar prompt(), textContent

function editDesc() {
  const nuevaDescripcion = prompt("Introduce la nueva habilidad: ");
  descripcion.textContent = nuevaDescripcion;
}

// 5. Función para añadir habilidad
// usar createElement(), appendChild(), prompt()

function anadirHabilidad() {
  const nuevaHabilidad = prompt("Introduce la nueva habilidad: ");
  const nuevoDivHabilidad = document.createElement("div");
  nuevoDivHabilidad.classList.add("habilidad");
  nuevoDivHabilidad.textContent = nuevaHabilidad;
  listaHabilidades.appendChild(nuevoDivHabilidad);
  nuevoDivHabilidad.addEventListener("click", () => nuevoDivHabilidad.remove());
}

// 6. Función para ocultar/mostrar habilidades
// usar classList.toggle()

// 7. Función para cambiar tema
// usar classList.toggle() en body

// 8. Función para mostrar info extra
// usar classList.toggle()

// 9. Función para cambiar email
// usar prompt(), textContent

function nuevoMail() {
  const nuevoEmail = prompt("Escribe el nuevo email:");
  email.textContent = nuevoEmail;
}

// 10. Event listeners
// Añadir addEventListener a cada botón

// 11. Event listener para eliminar habilidades
// Usar querySelectorAll() y forEach para añadir evento click

function inicializarEventosHabilidades() {
  const habilidadesUnaAUna = document.querySelectorAll(".habilidad");
  habilidadesUnaAUna.forEach(function (habilidad) {
    habilidad.addEventListener("click", function () {
      habilidad.remove();
    });
  });
  
}

function contarHabilidades () {
 
}

///////////////////// EVENT LISTENERS ////////////////////

botonNombre.addEventListener("click", cambiarNombre);
botonProfesion.addEventListener("click", cambiarProfesion);
botonDescripcion.addEventListener("click", editDesc);
botonAnadirHabilidad.addEventListener("click", anadirHabilidad);
botonEmail.addEventListener("click", nuevoMail);
botonOcultarHabilidades.addEventListener("click", function () {
  listaHabilidades.classList.toggle("oculto");
  if (listaHabilidades.classList.contains("oculto")) {
    botonOcultarHabilidades.textContent = "Mostrar habilidades";
  } else {
    botonOcultarHabilidades.textContent = "Ocultar habilidades";
  }
});
botonTema.addEventListener("click", function () {
  body.classList.toggle("tema-oscuro");
  if (body.classList.contains("tema-oscuro")) {
    botonTema.textContent = "Modo claro";
  } else {
    botonTema.textContent = "Modo oscuro";
  }
});
botonInfoExtra.addEventListener("click", function () {
  infoExtra.classList.toggle("oculto");
  if (infoExtra.classList.contains("oculto")) {
    botonInfoExtra.textContent = "Mostrar más información";
  } else {
    botonInfoExtra.textContent = "Mostrar menos información";
  }
});
inicializarEventosHabilidades();

///////////////////
