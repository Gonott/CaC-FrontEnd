var resultado = true;


function ValidarForm() {
    
   

  
    if (document.getElementById("nombre").value == "") {
        resultado = false;
        alert("Debe llenar el Nombre");
    }
    if (document.getElementById("telefono").value != "") {
        var exp = new RegExp("^[(]?[0-9]{2,3}[)]?[-\s\.]?[0-9]{4}[-\s\.]?[0-9]{4}$");
        if (exp.test(document.getElementById("telefono").value) ){
            resultado = true;
        }
        else{
                resultado = false;
                alert("Escriba un telefono válido");
            }
        
    }
    if (document.getElementById("telefono").value == "") {
        resultado = false;
        alert("Debe escribir un teléfono");
    }
    
   if (document.getElementById("email").value == "") {
        alert("Debe ingresar un correo");
        resultado = false;
    }
    if (document.getElementById("email").value != "") {
        var exp = new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+");
        if (exp.test(document.getElementById("email").value)) {
            resultado = true;
        }
        else {
            resultado = false;
            alert( "Escriba un correo válido");
        }        
    }
    if (document.getElementById("direccion").value == "") {
        resultado = false;
        alert("Debe escribir una direccion");
    }
    if (document.getElementById("fechaenvio").value == "") {
        resultado = false;
        alert("Debe seleccionar una fecha");
    }
    if (!document.getElementById('radiotc').checked && !document.getElementById('radioefe').checked) {
        resultado = false;
        alert("Debe seleccionar un método de pago");
    }

    

}

function PresionarEnviar() {


    try {
        ValidarForm();

    } catch (e) {
        alert(e.value);
    }
    
    if (resultado == true) {
        document.getElementById("res").innerHTML = "Listo, hemos registrado tu pedido, nos pondremos en contacto.";
    }
    else;

}


function seleccionarTarjeta() {
    document.getElementById('radiotc').checked = true;
    document.getElementById("radioefe").checked = false;
}

function seleccionarEfectivo() {
    document.getElementById('radiotc').checked = false;
    document.getElementById("radioefe").checked = true;

}