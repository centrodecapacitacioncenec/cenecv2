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

        const response = await fetch(
            "https://script.google.com/macros/s/AKfycbyznKqE_mQbdfbrk72JPZgNGilC5uhNcexWikdYeWem0RJ8dbC71nWbcGjWAeDULRga/exec",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        );

        const result = await response.text();

        console.log(result);

        alert("Solicitud enviada");

        form.reset();

    } catch (error) {

        console.error("ERROR REAL:", error);

        alert("Error al enviar");

    }

});
