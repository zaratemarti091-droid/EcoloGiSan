let consultar = document.getElementById("consultar");

let informacion = document.querySelector(".informacion");

let municipio = document.getElementById("municipio");


let graficaZapotlanejo = document.getElementById("grafica-zapotlanejo");
let graficaGuadalajara = document.getElementById("grafica-guadalajara");
let graficaZapopan = document.getElementById("grafica-zapopan");
let graficaTlaquepaque = document.getElementById("grafica-tlaquepaque");
let graficaTlajomulco = document.getElementById("grafica-tlajomulco");
let graficaElsalto = document.getElementById("grafica-elsalto");


consultar.addEventListener("click", function() {

    informacion.style.display = "block";

    graficaZapotlanejo.style.display = "none";
    graficaGuadalajara.style.display = "none";
    graficaZapopan.style.display = "none";
    graficaTlaquepaque.style.display = "none";
    graficaTlajomulco.style.display = "none";
    graficaElsalto.style.display = "none";


    if (municipio.value == "Zapotlanejo") {
        graficaZapotlanejo.style.display = "block";
    }

    else if (municipio.value == "Guadalajara") {
        graficaGuadalajara.style.display = "block";
    }

    else if (municipio.value == "Zapopan") {
        graficaZapopan.style.display = "block";
    }

    else if (municipio.value == "San Pedro Tlaquepaque") {
        graficaTlaquepaque.style.display = "block";
    }

    else if (municipio.value == "Tlajomulco de Zúñiga") {
        graficaTlajomulco.style.display = "block";
    }

    else if (municipio.value == "El Salto") {
        graficaElsalto.style.display = "block";
    }

});

let respuestas = document.querySelectorAll(".respuesta");

let puntos = 0;

let pregunta = document.getElementById("pregunta");

let numeroPregunta = 1;


let preguntas = [

    {
        pregunta: "¿Cuál de estos materiales es reciclable?",
        respuestas: [
            "Botella de plástico",
            "Pañal usado",
            "Comida podrida",
            "Papel sanitario usado"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué contenedor corresponde al vidrio?",
        respuestas: [
            "Contenedor verde",
            "Contenedor azul",
            "Contenedor amarillo",
            "Contenedor rojo"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Cuál de estos residuos es orgánico?",
        respuestas: [
            "Cáscara de plátano",
            "Botella de plástico",
            "Lata de refresco",
            "Vidrio"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué se debe hacer con una botella de plástico antes de reciclarla?",
        respuestas: [
            "Vaciarla y aplastarla",
            "Llenarla de agua",
            "Quemarla",
            "Tirarla con comida"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Cuál de estos materiales pertenece al papel?",
        respuestas: [
            "Periódico",
            "Botella de vidrio",
            "Lata",
            "Pila"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué residuo NO debe mezclarse con los reciclables comunes?",
        respuestas: [
            "Pila",
            "Cartón",
            "Botella de plástico",
            "Lata"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué material puede reciclarse muchas veces?",
        respuestas: [
            "Vidrio",
            "Pañal",
            "Comida podrida",
            "Papel sanitario usado"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué acción ayuda a reducir la cantidad de basura?",
        respuestas: [
            "Reutilizar objetos",
            "Comprar productos desechables",
            "Tirar todo junto",
            "Usar más plástico"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Cuál de estos residuos es electrónico?",
        respuestas: [
            "Celular viejo",
            "Cáscara de naranja",
            "Botella de vidrio",
            "Cartón"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué significa separar los residuos?",
        respuestas: [
            "Clasificarlos según su tipo",
            "Mezclarlos todos",
            "Quemarlos",
            "Tirarlos en cualquier lugar"
        ],
        correcta: 0
    }

];


function mostrarPregunta() {

    let preguntaActual = preguntas[numeroPregunta - 1];

    pregunta.textContent = preguntaActual.pregunta;

    let opciones = [];


    for (let i = 0; i < preguntaActual.respuestas.length; i++) {

        opciones.push({
            texto: preguntaActual.respuestas[i],
            correcta: i == preguntaActual.correcta
        });

    }


    opciones.sort(function() {
        return Math.random() - 0.5;
    });


    for (let i = 0; i < respuestas.length; i++) {

        respuestas[i].textContent = opciones[i].texto;

        respuestas[i].dataset.correcta =
            opciones[i].correcta ? "true" : "false";

        respuestas[i].style.display = "block";

    }

}


function siguientePregunta() {

    numeroPregunta = numeroPregunta + 1;


    if (numeroPregunta > preguntas.length) {

        mostrarResultado();

        return;

    }


    mostrarPregunta();

}


function mostrarResultado() {

    pregunta.textContent = "🏁 ¡Juego terminado!";


    for (let i = 0; i < respuestas.length; i++) {

        respuestas[i].style.display = "none";

    }


    let resultado = document.createElement("p");

    resultado.id = "resultado";

    resultado.style.fontSize = "22px";

    resultado.style.fontWeight = "bold";

    resultado.style.marginTop = "20px";


    if (puntos <= 25) {

        resultado.textContent =
            "Puntuación: " + puntos +
            " puntos. Sabes muy poco sobre reciclaje. 📚";

    }

    else if (puntos <= 50) {

        resultado.textContent =
            "Puntuación: " + puntos +
            " puntos. Vas empezando, ¡sigue aprendiendo! 🌱";

    }

    else if (puntos <= 75) {

        resultado.textContent =
            "Puntuación: " + puntos +
            " puntos. Tienes un buen conocimiento. ♻️";

    }

    else if (puntos < 100) {

        resultado.textContent =
            "Puntuación: " + puntos +
            " puntos. ¡Tienes muy buen conocimiento! 🌎";

    }

    else {

        resultado.textContent =
            "Puntuación: " + puntos +
            " puntos. ¡Excelente! Dominas el tema. 🏆";

    }


    document.querySelector(".juego-pantalla").appendChild(resultado);

}


respuestas.forEach(function(respuesta) {

    respuesta.addEventListener("click", function() {

        if (respuesta.dataset.correcta === "true") {

            puntos = puntos + 10;

            document.getElementById("puntos").textContent =
                "Puntos: " + puntos;

            siguientePregunta();

        }

        else {

            puntos = puntos - 5;

            document.getElementById("puntos").textContent =
                "Puntos: " + puntos;

            let textoOriginal = respuesta.textContent;

            respuesta.textContent = "❌";

            setTimeout(function() {

                respuesta.textContent = textoOriginal;

            }, 1000);

        }

    });

});


let pantallaJuego = document.querySelector(".juego-pantalla");

let botonJuego = document.querySelector(".juego");


pantallaJuego.style.display = "none";


botonJuego.addEventListener("click", function() {

    pantallaJuego.style.display = "block";

});


let pantallaGuia = document.querySelector(".guia-pantalla");

let botonGuia = document.querySelector(".guia");

let elementosGuia = document.querySelectorAll(".elemento-guia");

let textoGuia = document.getElementById("texto-guia");


pantallaGuia.style.display = "none";


botonGuia.addEventListener("click", function() {

    pantallaGuia.style.display = "block";

});


let informacionElementos = [

    {
        nombre: "Botella",
        material: "PET (plástico)",
        como: "Vacía la botella, enjuágala si es necesario y aplástala para reducir su volumen.",
        contenedor: "Reciclables / plástico"
    },

    {
        nombre: "Lata",
        material: "Aluminio o acero",
        como: "Vacía la lata, enjuágala y colócala junto con los metales reciclables.",
        contenedor: "Reciclables / metales"
    },

    {
        nombre: "Vidrio",
        material: "Vidrio",
        como: "Vacía el envase y procura que esté limpio. No mezcles vidrio roto con residuos comunes sin protección.",
        contenedor: "Reciclables / vidrio"
    },

    {
        nombre: "Cartón",
        material: "Fibra de papel",
        como: "Retira restos de comida, aplánalo y mantenlo seco.",
        contenedor: "Reciclables / papel y cartón"
    },

    {
        nombre: "Periódico",
        material: "Papel",
        como: "Mantén el papel limpio y seco. Evita mezclarlo con papel contaminado con comida o líquidos.",
        contenedor: "Reciclables / papel"
    },

    {
        nombre: "Orgánico",
        material: "Materia orgánica",
        como: "Separa los restos de comida y otros residuos orgánicos de los materiales reciclables.",
        contenedor: "Residuos orgánicos"
    },

    {
        nombre: "Celular",
        material: "Componentes electrónicos, metales y plástico",
        como: "No lo tires con la basura común. Llévalo a un punto de recolección de residuos electrónicos.",
        contenedor: "Punto especial para electrónicos"
    },

    {
        nombre: "Pila",
        material: "Metales y sustancias químicas",
        como: "No la abras, quemes ni tires con los residuos comunes. Llévala a un punto de recolección de pilas.",
        contenedor: "Punto especial para pilas"
    },

    {
        nombre: "Foco",
        material: "Vidrio, metal y componentes eléctricos",
        como: "Manipúlalo con cuidado y evita romperlo. Algunos focos requieren manejo especial.",
        contenedor: "Punto especial de recolección"
    },

    {
        nombre: "Leche",
        material: "Envase multicapa",
        como: "Vacía el envase, enjuágalo y déjalo escurrir antes de separarlo.",
        contenedor: "Reciclables"
    },

    {
        nombre: "Vaso",
        material: "Plástico",
        como: "Vacía el vaso y límpialo si está contaminado con restos de bebida o comida.",
        contenedor: "Reciclables / plástico"
    },

    {
        nombre: "Ropa",
        material: "Fibras textiles",
        como: "Si todavía puede utilizarse, es mejor reutilizarla o donarla. Si está dañada, busca un programa de recolección textil.",
        contenedor: "Reutilización / recolección textil"
    },

    {
        nombre: "Comida",
        material: "Materia orgánica",
        como: "Separa los restos de comida de los materiales reciclables y evita mezclarlos con plástico, vidrio o metal.",
        contenedor: "Residuos orgánicos"
    },

    {
        nombre: "Restos",
        material: "Materia orgánica",
        como: "Separa los restos vegetales y de alimentos para evitar contaminar otros residuos reciclables.",
        contenedor: "Residuos orgánicos"
    },

    {
        nombre: "Papel",
        material: "Celulosa",
        como: "Mantén el papel limpio y seco. El papel sanitario usado no debe mezclarse con papel reciclable.",
        contenedor: "Reciclables / papel"
    }

];


elementosGuia.forEach(function(elemento, indice) {

    elemento.addEventListener("click", function() {

        let informacion = informacionElementos[indice];

        textoGuia.innerHTML =
            "<strong>" + informacion.nombre + "</strong><br><br>" +
            "<strong>¿De qué está hecho?</strong><br>" +
            informacion.material + "<br><br>" +
            "<strong>¿Cómo reciclarlo?</strong><br>" +
            informacion.como + "<br><br>" +
            "<strong>¿Dónde va?</strong><br>" +
            informacion.contenedor;

    });

});

mostrarPregunta();