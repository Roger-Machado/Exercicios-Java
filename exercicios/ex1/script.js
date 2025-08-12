function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = ` Agora São ${hora} horas.`;
  if (hora >= 0 && hora < 12) {
    img.src = "components/fotomanha.jpg";
    document.body.style.background = "#584825";
  } else if (hora >= 12 && hora <= 18) {
    img.src = "components/fototarde.jpg";
    document.body.style.background = "#F8920B";
  } else {
    img.src = "components/fotonoite.jpg";
    document.body.style.background = "#0B0D15";
  }
}
