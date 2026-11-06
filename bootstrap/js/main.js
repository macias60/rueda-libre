const campoFecha = document.querySelector("#fecha");

if (campoFecha) {
    const hoy = new Date();

    const fechaLocal = [
        hoy.getFullYear(),
        String(hoy.getMonth() + 1).padStart(2, "0"),
        String(hoy.getDate()).padStart(2, "0")
    ].join("-");

    campoFecha.min = fechaLocal;
}