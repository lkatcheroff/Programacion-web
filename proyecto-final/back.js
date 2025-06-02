function eliminar(index){
    console.log("Eliminando consulta en el índice:", index);
    const consultas = JSON.parse(localStorage.getItem("consultas")) || [];
    consultas.splice(index, 1);
    localStorage.setItem("consultas", JSON.stringify(consultas));
    location.reload(); // Recargar la página para reflejar los cambios
}


document.addEventListener("DOMContentLoaded", function () {
  const contenedor = document.getElementById("lista-consultas");
  const consultas = JSON.parse(localStorage.getItem("consultas")) || [];

  if (consultas.length === 0) {
    contenedor.innerHTML = `<p class="text-center">No hay consultas registradas.</p>`;
    return;
  }

  for (let i = 0; i < consultas.length; i++) {
    const consulta = consultas[i];
    const item = document.createElement("div");
    item.className = "col-md-6";

    const ul = document.createElement("ul");
    ul.className = "list-group shadow-sm";

    ul.innerHTML = `
      <li class="list-group-item list-group-item-warning boton">${consulta.nombre}</li>
      <li class="list-group-item"><strong>Email:</strong> ${consulta.email}</li>
      <li class="list-group-item"><strong>Teléfono:</strong> ${consulta.telefono}</li>
      <li class="list-group-item"><strong>Asunto:</strong> ${consulta.asunto}</li>
      <li class="list-group-item"><strong>Mensaje:</strong> ${consulta.mensaje}</li>
    `;

    const liBoton = document.createElement("li");
    liBoton.className = "list-group-item";

    const boton = document.createElement("button");
    boton.className = "btn btn-sm btn-success";
    boton.textContent = "Resolver consulta";
    boton.addEventListener("click", function () {eliminar(i)});

    liBoton.appendChild(boton);
    ul.appendChild(liBoton);
    item.appendChild(ul);
    contenedor.appendChild(item);
  }
});

document.getElementById("boton-vuelta").addEventListener("click", function () {
    window.location.href = "index.html";
});
