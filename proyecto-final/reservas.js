function irAOtraPagina(pag) {
    window.location.href = "./" + pag + ".html";
  }

document.getElementById("reserva").addEventListener("click", irAOtraPagina.bind(null, "reserva"));
document.getElementById("cancelar").addEventListener("click", irAOtraPagina.bind(null, "cancelar"));
document.getElementById("modificar").addEventListener("click", irAOtraPagina.bind(null, "modificar"));
document.getElementById("consultar").addEventListener("click", irAOtraPagina.bind(null, "consultar"));