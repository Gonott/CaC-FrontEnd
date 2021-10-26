

function CambiarAside(numerotorta) {

    const titulo = document.getElementById("torta");
    const descripcion = document.getElementById("desc");

    var nombre, desc;

    switch (numerotorta) {

        case 1:
            nombre = "StrawBerry Chocolate Shortcake";
            desc = "Torta de chocolate con relleno de dulce de leche y crema, decorada con una base de crema batida y frutillas."
            break;
        case 2:
            nombre = "Torta Deadpool";
            desc = "Torta personalizada de Deadpool, la espada es de turrón con base de chocolate y decorada con gomitas, kitkat y mini alfajores";
            break;
        case 3:
            nombre = "Torta Red Velvet";
            desc = "Es una deliciosa torta recubierta con queso crema dulce. Su nombre se traduce a “Terciopelo Rojo”, debido a su característico color rojo profundo o vinotinto y su suave textura."
            break;
        case 4:
            nombre = "Torta de Banana y Dulce de Leche";
            desc = "Es una torta con base solida de chocolate, rellena de una capa de dulce de leche y otra de banana. Finalmente recubierta de crema batida y chocolate rallado.";
            break;
        case 5:
            nombre = "Lemon Pie";
            desc = "Deliciosa torta de base sólda, rellena de una secreta y riquisima crema con limon y decorada con una cobertura de merengue y limon rallado.";
            break;
        case 6:
            nombre = "Triple CheeseCake, un postre cremoso e irresistible";
            desc = "Torta con relleno de quesEl cheesecake, conocido también como pastel de queso, es un postre clásico de la cocina americana. Popular en todo el mundo, su principal ingrediente es el queso crema. Su fondo es crujiente y se obtiene al moler o triturar galletas y mezclarlas con mantequilla y azúcar."
            break;
        case 7:
            nombre = "Torta Rogel"
            desc = "La torta rogel es un postre tradicional argentina que tiene capas de masa casera bien crujientes, rellenas de dulce de leche. Toda la torta cubierta con merengue.";
            break;
        case 8:
            nombre = "Cremoso, suave e intenso. Tiramisú";
            desc = "El tiramisú es un postre italiano muy popular a nivel internacional hecho a partir de un ingrediente sólido y seco humedecido en café. Sin embargo, su nacimiento está plagado de historias, leyendas y disputas que llegan hasta nuestros días, sin duda te va a encantar.";
            break;
        case 9:
            nombre = "Torta de Frutillas y Crema";
            desc = "Clasica e irresistible. Con su bizcocho de chocolate o vainilla y rellena de frutillas con crema es un clásico de los postres. Está recubierta con crema batida y frutillas.";
        default:

    }

    const botón = document.getElementById("pedirBtn").style.display = 'block';

    //Aca le cambio a la pagina
    titulo.innerHTML = nombre;
    descripcion.innerHTML = desc;
   

}