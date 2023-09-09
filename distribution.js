var btnAbrir1 = document.getElementById("btn-abrir1"),
    btnCerrar1 = document.getElementById("btn-cerrar-popup1"),
    overlay = document.getElementById("overlay"),
    popup = document.getElementById("popup"),
    man3d = document.getElementById("model3d"),
    btnAbrir2 = document.getElementById("btn-abrir2"),
    btnCerrar2 = document.getElementById("btn-cerrar-popup2");
    popup3d = document.getElementById("popup3d")

btnAbrir1.addEventListener("click", function () {
    overlay.classList.add("active");
    popup.classList.add("active");
});
btnCerrar1.addEventListener("click", function () {
    overlay.classList.remove("active");
    popup.classList.remove("active");
});
btnAbrir2.addEventListener("click", function () {
    modelo3d.classList.add("active");
    popup3d.classList.add("active");

});
btnCerrar2.addEventListener("click", function () {
    modelo3d.classList.remove("active");
    popup3d.classList.remove("active");
});
