// Array para guardar las reservas
const reservas = JSON.parse(localStorage.getItem("reservas")) || [];
let ultimoCodigo = reservas.length > 0 ? parseInt(reservas[reservas.length - 1].codigo.slice(3)) : 0; // Obtener el último código usado

// Función para generar un código aleatorio
function generarCodigo() {
    ultimoCodigo++;
    // Generar un código de 4 dígitos
    const codigo = String(ultimoCodigo).padStart(4, '0'); // Asegurarse de que tenga 4 dígitos
    return 'RES' + codigo; // ej: RES4532
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
    e.preventDefault(); //aca hay dudas, esto dijo gpt

    // Obtener datos del formulario
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
    // Crear objeto reserva
    const nuevaReserva = {
        dia: dia,
        turno: turno,
        nombre: nombre,
        codigo: codigo
    };

    // Guardar en el array
    reservas.push(nuevaReserva);
    localStorage.setItem("reservas", JSON.stringify(reservas));


    // Mostrar resultado
    document.getElementById('resultado').innerHTML = `
        <p>Reserva realizada con éxito.</p>
        <p><strong>Código:</strong> ${codigo}</p>
    `;

    // Limpiar formulario
    this.reset();
});

