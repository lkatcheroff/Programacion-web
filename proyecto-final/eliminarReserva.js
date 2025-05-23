let reservas = JSON.parse(localStorage.getItem("reservas")) || [];

let codigoActual = "";
let infoDiv = document.getElementById("info-reserva");

document.getElementById("boton-eliminar").addEventListener("click", function () {
    const codigo = document.getElementById("codigo-eliminar").value.trim();
    const reserva = reservas.find(r => r.codigo === codigo);

    if (!reserva) {
        infoDiv.innerHTML = `<p style="color: red;">Reserva no encontrada.</p>`;
        infoDiv.style.display = "block";
        return;
    }

    codigoActual = codigo; // Guardamos el código para usarlo luego

    infoDiv.innerHTML = `
        <p>Reserva encontrada:</p>
        <ul>
            <li><strong>Nombre:</strong> ${reserva.nombre}</li>
            <li><strong>Día:</strong> ${reserva.dia}</li>
            <li><strong>Turno:</strong> ${reserva.turno}:00 hs</li>
        </ul>
    `;
    document.getElementById("confirmar-eliminar").style.display = "block";
    infoDiv.style.display = "block";
});

document.getElementById("confirmar-eliminar").addEventListener("click", function () {
    reservas = reservas.filter(r => r.codigo !== codigoActual);
    localStorage.setItem("reservas", JSON.stringify(reservas));
    infoDiv.innerHTML = `<p style="color: green;">Reserva eliminada exitosamente.</p>`;
});
