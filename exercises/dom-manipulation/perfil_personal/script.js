// 1. Seleccionar elementos
const nombre = document.getElementById("nombre"); // getElementById
const profesion = document.getElementById("profesion"); // getElementById
const descripcion = document.getElementById("descripcion"); // ... resto de elementos
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const ciudad = document.getElementById("ciudad");
const infoExtra = document.getElementById("info-extra");
const mensajeFooter = document.getElementById("mensaje-footer");

// 2. Función para cambiar el nombre
// usar prompt(), textContent, setAttribute()
const botonNombre = document.querySelector("#btn-cambiar-nombre");
botonNombre.addEventListener("click", function () {
  const nuevoNombre = prompt("Introduce el nuevo nombre: ");
  nombre.textContent = nuevoNombre;
});

// 3. Función para cambiar la profesión
// usar prompt(), textContent

const botonProfesion = document.querySelector("#btn-cambiar-profesion");
botonProfesion.addEventListener("click", function () {
  const nuevaProfesion = prompt("Introduce la nueva profesión: ");
  profesion.textContent = nuevaProfesion;
});

// 4. Función para editar descripción
// usar prompt(), textContent

const botonDescripcion = document.querySelector("#btn-editar-desc");
botonDescripcion.addEventListener("click", function () {
  const nuevaDescripcion = prompt("Introduce la nueva habilidad: ");
  descripcion.textContent = nuevaDescripcion;
});

// 5. Función para añadir habilidad
// usar createElement(), appendChild(), prompt()

const botonAnadirHabilidad = document.querySelector("#btn-añadir-habilidad");
const listaHabilidades = document.querySelector("#lista-habilidades");
botonAnadirHabilidad.addEventListener("click", function () {
  const nuevaHabilidad = prompt("Introduce la nueva descripción: ");
  const nuevoDivHabilidad = document.createElement("div");
  nuevoDivHabilidad.classList.add("habilidad");
  listaHabilidades.appendChild(nuevoDivHabilidad);
  nuevoDivHabilidad.textContent = nuevaHabilidad;
});

// 6. Función para ocultar/mostrar habilidades
// usar classList.toggle()

const botonOcultarHabilidades = document.querySelector(
  "#btn-ocultar-habilidades"
);
botonOcultarHabilidades.addEventListener("click", function () {
  listaHabilidades.classList.toggle("oculto");
});

// 7. Función para cambiar tema
// usar classList.toggle() en body

// 8. Función para mostrar info extra
// usar classList.toggle()

// 9. Función para cambiar email
// usar prompt(), textContent

// 10. Event listeners
// Añadir addEventListener a cada botón

// 11. Event listener para eliminar habilidades
// Usar querySelectorAll() y forEach para añadir evento click
