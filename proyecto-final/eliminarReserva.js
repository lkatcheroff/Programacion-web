let reservas = JSON.parse(localStorage.getItem("reservas")) || [];

let codigoActual = "";
let infoDiv = document.getElementById("info-reserva");

document.getElementById("form-eliminar").addEventListener("submit", function (e) {
    e.preventDefault(); 
    const codigo = document.getElementById("codigo-eliminar").value.trim();
    const reserva = reservas.find(r => r.codigo === codigo);

    if (!reserva) {
        infoDiv.innerHTML = `<p class="text-danger">Reserva no encontrada.</p>`;
        infoDiv.style.display = "block";
        document.getElementById("confirmar-eliminar").style.display = "none";
        return;
    }

    codigoActual = codigo;

    infoDiv.innerHTML = `
        <p>Reserva encontrada:</p>
        <ul class="sin-bullets">
            <li><strong>Nombre:</strong> ${reserva.nombre}</li>
            <li><strong>Día:</strong> ${reserva.dia}</li>
            <li><strong>Turno:</strong> ${reserva.turno}:00 hs</li>
        </ul>
    `;
    document.getElementById("confirmar-eliminar").style.display = "inline-block";
    infoDiv.style.display = "block";
});

document.getElementById("confirmar-eliminar").addEventListener("click", function () {
    reservas = reservas.filter(r => r.codigo !== codigoActual);
    localStorage.setItem("reservas", JSON.stringify(reservas));
    infoDiv.innerHTML = `<p class="text-success">Reserva eliminada exitosamente.</p>`;
    document.getElementById("confirmar-eliminar").style.display = "none";
    document.getElementById("codigo-eliminar").value = "";
});
