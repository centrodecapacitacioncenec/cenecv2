const form = document.getElementById("becaForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const data = new URLSearchParams();
    data.append("nombre", form.nombre.value);
    data.append("celular", form.celular.value);
    data.append("carta", form.carta.value);

    await fetch("TU_URL_EXEC", {
        method: "POST",
        mode: "no-cors",
        body: data
    });

    alert("Enviado");
    form.reset();

});
