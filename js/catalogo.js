function CambiarAside(numerotorta) {

    const titulo = document.getElementById("torta");
    const descripcion = document.getElementById("desc");

    var nombre, desc;

    switch (numerotorta) {

        case 1:
            nombre = "StrawBerry Chocolate Shortcake";
            desc = "Torta de chocolate con relleno de dulce de leche y crema, decorada con una base de crema batida y frutillas.";
            break;
        case 2:
            nombre = "Torta Deadpool";
            desc = "Torta personalizada de Deadpool, la espada es de turron con base de chocolate y decorada con gomitas, kitkat y mini alfajores";
            break;
        case 3:
            nombre = "Torta Red Velvet";
            desc = "Es una deliciosa torta recubierta con queso crema dulce. Su nombre se traduce a Terciopelo Rojo, debido a su caracteristico color rojo profundo o vinotinto y su suave textura.";
            break;
        case 4:
            nombre = "Torta de Banana y Dulce de Leche";
            desc = "Es una torta con base solida de chocolate, rellena de una capa de dulce de leche y otra de banana. Finalmente recubierta de crema batida y chocolate rallado.";
            break;
        case 5:
            nombre = "Lemon Pie";
            desc = "Deliciosa torta de base solda, rellena de una secreta y riquisima crema con limon y decorada con una cobertura de merengue y limon rallado.";
            break;
        case 6:
            nombre = "Triple CheeseCake, un postre cremoso e irresistible";
            desc = "Torta con relleno de quesEl cheesecake, conocido tambi�n como pastel de queso, es un postre cl�sico de la cocina americana. Popular en todo el mundo, su principal ingrediente es el queso crema. Su fondo es crujiente y se obtiene al moler o triturar galletas y mezclarlas con mantequilla y azucar.";
            break;
        case 7:
            nombre = "Torta Rogel";
            desc = "La torta rogel es un postre tradicional argentina que tiene capas de masa casera bien crujientes, rellenas de dulce de leche. Toda la torta cubierta con merengue.";
            break;
        case 8:
            nombre = "Cremoso, suave e intenso. Tiramis�";
            desc = "El tiramisu es un postre italiano muy popular a nivel internacional hecho a partir de un ingrediente solido y seco humedecido en cafe. Sin embargo, su nacimiento esta plagado de historias, leyendas y disputas que llegan hasta nuestros d�as, sin duda te va a encantar.";
            break;
        case 9:
            nombre = "Torta de Frutillas y Crema";
            desc = "Clasica e irresistible. Con su bizcocho de chocolate o vainilla y rellena de frutillas con crema es un clasico de los postres. Esta recubierta con crema batida y frutillas.";
            break;
        default:
    }

    const boton = document.getElementById("pedirBtn").style.display = 'block';

    //Aca le cambio a la pagina
    titulo.innerHTML = nombre;
    descripcion.innerHTML = desc;


}