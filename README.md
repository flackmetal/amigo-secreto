# amigo-secreto
desafio amigo secreto
Explicacion de cada partes del codigo para el desafio del amigo secreto en javascript:
1. function agregarAmigo() { ... }
Esta función se encarga de agregar un nuevo amigo a la lista. Veamos cada paso:
const inputAmigo = document.getElementById("amigo");
Esta línea obtiene la referencia al elemento HTML que tiene el ID "amigo". Se asume que este es un campo de entrada de texto (<input>) donde el usuario escribe el nombre del amigo.
const nombreAmigo = inputAmigo.value.trim();
inputAmigo.value obtiene el valor que el usuario ha ingresado en el campo de texto.
.trim() elimina los espacios en blanco al principio y al final de la cadena. Esto es útil para evitar errores si el usuario accidentalmente ingresa espacios extra.
const listaAmigos = document.getElementById("listaAmigos");
Esta línea obtiene la referencia al elemento HTML que tiene el ID "listaAmigos". Se asume que este es un elemento de lista desordenada (<ul> o <ol>) donde se mostrarán los nombres de los amigos.
if (nombreAmigo === "") { ... }
Este bloque if verifica si el usuario ha ingresado algo en el campo de texto. Si nombreAmigo está vacío (después de eliminar los espacios), se muestra una alerta al usuario pidiéndole que ingrese un nombre y la función se detiene (return;).
if (!isNaN(nombreAmigo)) { ... }
Esta línea verifica si el valor ingresado en nombreAmigo es un número. isNaN() devuelve true si el valor no es un número. El ! al principio invierte el resultado, por lo que la condición se cumple si nombreAmigo es un número.
Si el nombre contiene solo números, se muestra una alerta indicando que el nombre no puede contener números y la función se detiene.
const nuevoLi = document.createElement("li");
Esta línea crea un nuevo elemento de lista (<li>). Este nuevo elemento se utilizará para mostrar el nombre del amigo en la lista.
nuevoLi.textContent = nombreAmigo;
Esta línea establece el contenido de texto del nuevo elemento de lista (<li>) con el nombre del amigo ingresado por el usuario.
listaAmigos.appendChild(nuevoLi);
Esta línea agrega el nuevo elemento de lista (<li>) como un hijo del elemento de lista listaAmigos. Esto hace que el nombre del amigo aparezca en la lista en la página web.
inputAmigo.value = ""; // Limpiar el input
Finalmente, esta línea limpia el campo de texto estableciendo su valor a una cadena vacía, preparándolo para que el usuario pueda ingresar otro nombre.
2. function sortearAmigo() { ... }
Esta función se encarga de realizar el sorteo del amigo secreto. Veamos los pasos:
const listaAmigos = document.getElementById("listaAmigos");
Obtiene la referencia al elemento de la lista de amigos.
const resultadoDiv = document.getElementById("resultado");
Obtiene la referencia al elemento HTML donde se mostrará el resultado del sorteo. Se asume que este es un <div> o algún otro elemento donde se puede insertar texto.
const amigos = Array.from(listaAmigos.children).map(li => li.textContent);
listaAmigos.children obtiene una colección HTML de todos los elementos hijos (los <li>) dentro de la lista de amigos.
Array.from() convierte esta colección HTML en un array de JavaScript.
.map(li => li.textContent) itera sobre cada elemento de lista (li) en el array y extrae su contenido de texto (textContent), creando un nuevo array llamado amigos que contiene solo los nombres de los amigos.
if (amigos.length === 0) { ... }
Verifica si el array amigos está vacío. Si no hay amigos en la lista, se muestra una alerta y la función se detiene.
// Algoritmo de sorteo simple (barajar el array)
Este es un comentario que indica que el siguiente bloque de código implementa un algoritmo de barajado (shuffle) para el array de amigos.
for (let i = amigos.length - 1; i > 0; i--) { ... }
Este bucle for itera a través del array de amigos desde el último elemento hasta el segundo elemento. Este es un enfoque común para el algoritmo de Fisher-Yates shuffle.
const j = Math.floor(Math.random() * (i + 1));
Genera un número aleatorio j entre 0 y i (inclusive).
[amigos[i], amigos[j]] = [amigos[j], amigos[i]];
Esta línea realiza un intercambio de valores entre el elemento en la posición i y el elemento en la posición j del array amigos. Esto es lo que realmente baraja el array.
// Mostrar el resultado (el primer nombre después de barajar)
Otro comentario que indica que el siguiente paso es mostrar el resultado del sorteo.
resultadoDiv.innerHTML = \El amigo secreto sorteado es: <strong>${amigos[0]}</strong>`;`
Esta línea establece el contenido HTML del elemento resultadoDiv. Utiliza una plantilla literal (backticks ``) para insertar el primer nombre del array amigos (que ahora está barajado) dentro de un texto que indica el resultado del sorteo. La etiqueta <strong> se utiliza para poner en negrita el nombre del amigo sorteado.
3. Evento para agregar amigo al presionar Enter en el input
document.getElementById("amigo").addEventListener("keypress", function(event) { ... });
Esta línea agrega un "escuchador de eventos" al elemento con el ID "amigo". El evento que se está escuchando es "keypress", que se dispara cuando se presiona una tecla mientras el campo de texto está enfocado.
La función anónima que se pasa como segundo argumento se ejecutará cada vez que se presiona una tecla en el campo de texto.
if (event.key === "Enter") { ... }
Dentro de la función del evento, esta condición verifica si la tecla presionada es la tecla "Enter".
event.preventDefault(); // Evita el comportamiento por defecto del Enter
Si la tecla presionada es "Enter", esta línea evita el comportamiento predeterminado del navegador para esa tecla (que normalmente sería enviar un formulario si el input está dentro de uno).
agregarAmigo();
Finalmente, si se presiona la tecla "Enter", se llama a la función agregarAmigo(), lo que permite al usuario agregar un amigo a la lista simplemente presionando Enter después de escribir el nombre.
En resumen, este código JavaScript permite a los usuarios ingresar nombres de amigos, mostrarlos en una lista y luego realizar un sorteo para determinar un amigo secreto de manera aleatoria. La función agregarAmigo gestiona la adición de nombres a la lista, y la función sortearAmigo se encarga de barajar los nombres y mostrar el resultado del sorteo. El evento "keypress" en el campo de texto proporciona una forma conveniente para agregar amigos usando la tecla Enter.
