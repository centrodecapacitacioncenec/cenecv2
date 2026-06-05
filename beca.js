const form = document.getElementById("becaForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const data = new URLSearchParams();

    data.append("nombre", form.nombre.value);
    data.append("celular", form.celular.value);
    data.append("carta", form.carta.value);

    try {

        await fetch("https://script.google.com/macros/s/AKfycbxHpfgOvE_7jg5hfbyIdOINqfxyXlJSvMadIxWnCKP1NWUGCqLJvi3F1amjrdeD1m4n/exec", {
            method: "POST",
            mode: "no-cors",
            body: data
        });

        alert("Solicitud enviada correctamente");

        form.reset();

    } catch (error) {

        console.error("Error al enviar:", error);
        alert("Error al enviar la solicitud");

    }

});
