const form = document.getElementById("becaForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const data = {
        nombre: form.nombre.value,
        celular: form.celular.value,
        carta: form.carta.value
    };

    try {

        await fetch(
            "https://script.google.com/macros/s/AKfycbxHpfgOvE_7jg5hfbyIdOINqfxyXlJSvMadIxWnCKP1NWUGCqLJvi3F1amjrdeD1m4n/exec",
            {
                method: "POST",
                mode: "no-cors",
                body: JSON.stringify(data)
            }
        );

        alert("Solicitud enviada");

        form.reset();

    } catch (error) {

        console.error(error);

        alert("Error al enviar");

    }

});
