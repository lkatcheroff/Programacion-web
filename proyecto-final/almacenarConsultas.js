function agregarConsulta(nuevaConsulta) {
    const consultasGuardadas = JSON.parse(localStorage.getItem("consultas")) || [];
    consultasGuardadas.push(nuevaConsulta);
    localStorage.setItem("consultas", JSON.stringify(consultasGuardadas));
}

document.getElementById('form-contacto').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const asunto = document.getElementById("asunto").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    const nuevaConsulta = { nombre, email, telefono, asunto, mensaje };
    agregarConsulta(nuevaConsulta);

    alert("Ya recibimos tu consulta. Nos pondremos en contacto con vos pronto.");

    this.reset();
});

