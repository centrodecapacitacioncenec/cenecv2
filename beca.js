const form = document.getElementById("becaForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const data = {
        nombre: form.nombre.value,
        celular: form.celular.value,
        carta: form.carta.value
    };

    try{

      await fetch(
    "https://script.google.com/macros/s/AKfycbxrHHcDZR67nDkocHkss4mSI2zUsk54Xwz6fZGl5ES2rfBCx1YFyzJbuM7Fv9EuBHln/exec",
    {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(data)
    }
);

        alert("Solicitud enviada correctamente");

        form.reset();

    }catch(error){

        alert("Error al enviar");

    }

});
