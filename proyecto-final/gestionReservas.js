// Array para guardar las reservas
const reservas = [];

// Función para generar un código aleatorio
function generarCodigo() {
    return 'RES' + Math.floor(1000 + Math.random() * 9000); // ej: RES4532
}

document.getElementById('form-reserva').addEventListener('submit', function(e) {
    e.preventDefault(); //aca hay dudas, esto dijo gpt

    // Obtener datos del formulario
    const dia = document.getElementById('dia').value;
    const turno = document.getElementById('turno').value;
    const nombre = document.getElementById('nombre').value;
    const codigo = generarCodigo();

    for (let i = 0; i < reservas.length; i++) {
        if (reservas[i].dia === dia && reservas[i].turno === turno) {
            document.getElementById('resultado').innerHTML = `
                <p>El turno ya está reservado. Por favor, elija otro.</p>
            `;
            return;
        }
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

    // Mostrar resultado
    document.getElementById('resultado').innerHTML = `
        <p>Reserva realizada con éxito.</p>
        <p><strong>Código:</strong> ${codigo}</p>
    `;

    // Limpiar formulario
    this.reset();
    });