console.log("JS funcionando");
const form = document.getElementById("becaForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const data = {
        nombre: form.nombre.value,
        celular: form.celular.value,
        carta: form.carta.value
    };

    try {

        await fetch("https://script.google.com/macros/s/AKfycbz90LkDoSUfU9TuFN7tfsDH0Kfn6MHB4WHGpPmpqqL8D8yyaGbDforyD_lenDhPGx10/exec", {
            method: "POST",
            mode: "no-cors",
            body: JSON.stringify(data)
        });

        alert("Solicitud enviada");

        form.reset();

    } catch (error) {

        console.error(error);

        alert("Error al enviar");

    }

});
