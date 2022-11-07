function validar() {

    var nombre = document.form.nombre.value.trim();

    if ((!nombre) || (nombre.length < 3)) {
        alert("¡Ingrese un nombre válido!");
        document.form.nombre.focus();
        document.form.nombre.className = "incorrecto";
        return false;
    } else {
        document.form.nombre.className = "form-item";
    }

    var patronmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email = document.form.email.value;

    if (!patronmail.test(email)) {
        alert("Debe ingresar un email valido");
        // correo.className = "error";
        document.form.email.focus();
        document.form.email.className = "incorrecto";

        return false;
    } else {
        document.form.email.className = "form-item";
    }

    var numero = document.form.numero.value;
    if (!numero) {
        alert("ingrese un número de teléfono");
        document.form.numero.focus();
        document.form.numero.className = "incorrecto";
    } else {
        document.form.nombre.className = "form-item";
    }

    var mensaje = document.form.mensaje.value;
    if (!mensaje) {
        alert("Debe dejar un mensaje");
        document.form.mensaje.focus();
        document.form.mensaje.className = "incorrecto";
        return false;
    } else {
        document.form.mensaje.className = "form-item";
    }

    if (confirm("¿Está seguro que desea enviar sus datos?")) {
        alert("Gracias por completar el formulario");
        return true;
    } else {
        return false;
    }
}