function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();
    const listaAmigos = document.getElementById("listaAmigos");

    if (nombreAmigo === "") {
        alert("Por favor, ingrese un nombre.");
        return;
    }

    if (!isNaN(nombreAmigo)) {
        alert("El nombre no puede contener números.");
        return;
    }

    const nuevoLi = document.createElement("li");
    nuevoLi.textContent = nombreAmigo;
    listaAmigos.appendChild(nuevoLi);
    inputAmigo.value = ""; // Limpiar el input
}

function sortearAmigo() {
    const listaAmigos = document.getElementById("listaAmigos");
    const resultadoDiv = document.getElementById("resultado");
    const amigos = Array.from(listaAmigos.children).map(li => li.textContent);

    if (amigos.length === 0) {
        alert("Por favor, agregue amigos antes de sortear.");
        return;
    }

    // Algoritmo de sorteo simple (barajar el array)
    for (let i = amigos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigos[i], amigos[j]] = [amigos[j], amigos[i]];
    }

    // Mostrar el resultado (el primer nombre después de barajar)
    resultadoDiv.innerHTML = `El amigo secreto sorteado es: <strong>${amigos[0]}</strong>`;
}

function reiniciarJuego() {
    const listaAmigos = document.getElementById("listaAmigos");
    const resultadoDiv = document.getElementById("resultado");

    // Limpiar la lista de amigos
    listaAmigos.innerHTML = "";
    // Limpiar el resultado
    resultadoDiv.innerHTML = "";
    // Limpiar el campo de entrada
    document.getElementById("amigo").value = "";
}

// Evento para agregar amigo al presionar Enter en el input
document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Evita el comportamiento por defecto del Enter
        agregarAmigo();
    }
});