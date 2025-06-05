const reservas = JSON.parse(localStorage.getItem("reservas")) || [];
let ultimoCodigo = reservas.length > 0 ? parseInt(reservas[reservas.length - 1].codigo.slice(3)) : 0; // Obtener el último código usado

function generarCodigo() {
    ultimoCodigo++;
    const codigo = String(ultimoCodigo).padStart(4, '0'); 
    return 'RES' + codigo; 
}

function buscarReserva(dia, turno) {
    for (let i = 0; i < reservas.length; i++) {
        if (reservas[i].dia === dia && reservas[i].turno === turno) {
            return true;
        }
    }
    return false;

}

document.getElementById('form-reserva').addEventListener('submit', function (e) {
    e.preventDefault(); 

    const dia = document.getElementById('dia').value;
    const turno = document.getElementById('turno').value;
    const nombre = document.getElementById('nombre').value;
    const codigo = generarCodigo();

    if (buscarReserva(dia, turno)) {
        document.getElementById('resultado').innerHTML = `
                <p>El turno ya está reservado. Por favor, elija otro.</p>
            `;
        return;
    }
    const diaConFormato = new Date(dia);
    if (diaConFormato < Date.now()) {
        document.getElementById('resultado').innerHTML = `
                <p>Por favor, ingrese una fecha válida y posterior a hoy.</p>
            `;
        return;
    }
    const nuevaReserva = {
        dia: dia,
        turno: turno,
        nombre: nombre,
        codigo: codigo
    };

    reservas.push(nuevaReserva);
    localStorage.setItem("reservas", JSON.stringify(reservas));


    document.getElementById('resultado').innerHTML = `
        <p>Reserva realizada con éxito.</p>
        <p><strong>Código:</strong> ${codigo}</p>
    `;

    this.reset();
});

document.getElementById("volver").addEventListener("click", function () {
    window.location.href = "reservas.html";
})
