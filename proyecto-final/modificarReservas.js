const reservas = JSON.parse(localStorage.getItem("reservas")) || [];

let reservaAEditar = null;

function buscarReserva(dia, turno) {
    for (let i = 0; i < reservas.length; i++) {
        if (reservas[i].dia === dia && reservas[i].turno === turno) {
            return true;
        }
    }
    return false;
}

document.getElementById('boton-modificar').addEventListener('click', function () {
    const codigo = document.getElementById('codigo-busqueda').value;
    const reserva = reservas.find(r => r.codigo === codigo);

    if (reserva) {
        reservaAEditar = reserva;
        document.getElementById('form-edicion').style.display = 'block';
        document.getElementById('edit-dia').value = reserva.dia;
        document.getElementById('edit-turno').value = reserva.turno;
        document.getElementById('edit-nombre').value = reserva.nombre;
    } else {
        alert("Reserva no encontrada.");
        document.getElementById('form-edicion').style.display = 'none';
    }
});

document.getElementById('boton-editar-reserva').addEventListener('click', function () {
    if (reservaAEditar) {
        const dia = document.getElementById('edit-dia').value;
        const turno = document.getElementById('edit-turno').value;
        const nombre = document.getElementById('edit-nombre').value;
        if (buscarReserva(dia, turno)) {
            alert("El turno ya está reservado. Por favor, elija otro.");
            return;
        }
        const diaConFormato = new Date(dia);
        if (diaConFormato < Date.now()) {
            alert("Por favor, ingrese una fecha válida y posterior a hoy.")
            return;
        }
        else {
            const index = reservas.findIndex(r => r.codigo === reservaAEditar.codigo);
            reservas[index] = { dia, turno, nombre, codigo: reservaAEditar.codigo };
        };
        localStorage.setItem("reservas", JSON.stringify(reservas));

        alert("Reserva modificada con éxito.");
        document.getElementById('form-edicion').style.display = 'none';
        reservaAEditar = null;
    }
}
);

document.getElementById("volver").addEventListener("click", function () {
    window.location.href = "reservas.html";
})