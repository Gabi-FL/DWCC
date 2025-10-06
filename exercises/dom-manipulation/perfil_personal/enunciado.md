### Parte 1: Selección de elementos

- [x] Usa `getElementById()` para seleccionar: nombre, profesión, descripción, email, teléfono, ciudad, info-extra, y mensaje-footer
- [x] Usa `querySelector()` para seleccionar al menos 3 botones
- [x] Usa `querySelectorAll()` para seleccionar todas las habilidades

### Parte 2: Cambiar textos

- [x] Botón "Cambiar Nombre": usa `prompt()` para pedir un nombre y actualízalo con `textContent`
- [x] Botón "Cambiar Profesión": usa `prompt()` y `textContent`
- [x] Botón "Editar Descripción": usa `prompt()` para cambiar el párrafo de descripción
- [x] Botón "Cambiar Email": usa `prompt()` para actualizar el email

###xParte 3: Añadir elementos

- [x] Botón "Añadir Habilidad": usa `createElement()` para crear un nuevo div con clase "habilidad"
- [x] Usa `appendChild()` para añadirlo a la lista de habilidades
- [x] El texto de la nueva habilidad debe pedirse con `prompt()`

###xParte 4: Mostrar/Ocultar elementos

- [x] Botón "Ocultar Habilidades": usa `classList.toggle()` para mostrar/ocultar la lista de habilidades
- [x] Cambia el texto del botón entre "Ocultar Habilidades" y "Mostrar Habilidades"
- [x] Botón "Mostrar Información Extra": usa `classList.toggle()` para mostrar/ocultar el div de info-extra

###xParte 5: Cambiar tema

- [x] Botón "Modo Oscuro": usa `classList.toggle()` en el body para añadir/quitar la clase "tema-oscuro"
- [x] Cambia el texto del botón entre "Modo Oscuro" y "Modo Claro"

###xParte 6: Modificar estilos y contenido

- [x] Al cambiar el nombre, añade un mensaje temporal en el footer usando `innerHTML`
- [x] Usa `setAttribute()` para añadir un atributo `data-usuario` con el nombre al elemento nombre
- [x] Muestra en consola el valor con `getAttribute()`

### Parte 7: Eliminar elementos

- [ ] Al hacer click en una habilidad, elimínala usando `remove()`
- [ ] Muestra en consola qué habilidad se eliminó usando `textContent`

### Parte 8: Navegación DOM

- [ ] Usa `parentElement` para acceder al contenedor de las habilidades desde una habilidad
- [ ] Usa `children` para contar cuántas habilidades hay y muéstralo en consola
- [ ] Usa `firstElementChild` para cambiar el color de la primera habilidad
