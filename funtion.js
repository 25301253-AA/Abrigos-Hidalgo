document.addEventListener("DOMContentLoaded", () => {

    // MENÚ PARA CELULARES
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const navMenu = document.getElementById("nav-menu");

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });

        document.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
            });
        });
    }

    // PREGUNTAS FRECUENTES
    document.querySelectorAll(".accordion-header").forEach(header => {
        header.addEventListener("click", () => {
            const item = header.parentElement;

            document.querySelectorAll(".accordion-item").forEach(other => {
                if (other !== item) {
                    other.classList.remove("active");
                }
            });

            item.classList.toggle("active");
        });
    });

    // CATÁLOGO DE PRODUCTOS
    const productosCatalogo = {

        abrigos: [
            { nombre: "Abrigo 1", imagen: "Abrigo.jpeg" },
            { nombre: "Abrigo 2", imagen: "Abriguito.jpeg" },
            { nombre: "Abrigo 3", imagen: "Abrigo3.jpeg" },
            { nombre: "Abrigo 4", imagen: "Abrigo4.jpeg" },
            { nombre: "Abrigo 5", imagen: "Abrigo5.jpeg" },
            { nombre: "Abrigo 6", imagen: "Abrigo6.jpeg" },
            { nombre: "Abrigo 7", imagen: "Abrigo7.jpeg" },
            { nombre: "Abrigo 8", imagen: "Abrigo8.jpeg" },
            { nombre: "Abrigo 9", imagen: "Abrigo9.jpeg" },
            { nombre: "Abrigo 10", imagen: "Abrigo10.jpeg" },
            { nombre: "Abrigo 11", imagen: "Abrigo11.jpeg" },
            { nombre: "Abrigo 12", imagen: "Abrigo12.jpeg" },
            { nombre: "Abrigo 13", imagen: "Abrigo13.jpeg" },
            { nombre: "Abrigo 14", imagen: "Abrigo14.jpeg" },
            { nombre: "Abrigo 15", imagen: "Abrigo15.jpeg" },
            { nombre: "Abrigo 16", imagen: "Abrigo16.jpeg" },
            { nombre: "Abrigo 17", imagen: "Abrigo17.jpeg" },
            { nombre: "Abrigo 18", imagen: "Abrigo18.jpeg" },
            { nombre: "Abrigo 19", imagen: "Abrigo19.jpeg" },
            { nombre: "Abrigo 20", imagen: "Abrigo20.jpeg" }
        ],
        /*ROPA*/
        ropa: [
            { nombre: "Prenda 1", imagen: "Ropa1.jpeg" },
            { nombre: "Prenda 2", imagen: "Ropa2.jpeg" },
            { nombre: "Prenda 3", imagen: "Ropa3.jpeg" },
            { nombre: "Prenda 4", imagen: "Ropa4.jpeg" },
            { nombre: "Prenda 5", imagen: "Ropa5.jpeg" },
            { nombre: "Prenda 6", imagen: "Ropa6.jpeg" },
            { nombre: "Prenda 7", imagen: "Ropa7.jpeg" },
            { nombre: "Prenda 8", imagen: "Ropa8.jpeg" },
            { nombre: "Prenda 9", imagen: "Ropa9.jpeg" },
            { nombre: "Prenda 10", imagen: "Ropa10.jpeg" },
            { nombre: "Prenda 11", imagen: "Ropa11.jpeg" },
            { nombre: "Prenda 12", imagen: "Ropa12.jpeg" },
            { nombre: "Prenda 13", imagen: "Ropa13.jpeg" },
            { nombre: "Prenda 14", imagen: "Ropa14.jpeg" },
            { nombre: "Prenda 15", imagen: "Ropa15.jpeg" },
            { nombre: "Prenda 16", imagen: "Ropa16.jpeg" },
            { nombre: "Prenda 17", imagen: "Ropa17.jpeg" },
            { nombre: "Prenda 18", imagen: "Ropa18.jpeg" },
            { nombre: "Prenda 19", imagen: "Ropa19.jpeg" },
            { nombre: "Prenda 20", imagen: "Ropa20.jpeg" }
        ],
        /*Maquillaje*/
        maquillaje: [
            { nombre: "Maquillaje 1", imagen: "Maquillaje1.jpeg" },
            { nombre: "Maquillaje 2", imagen: "Maquillaje2.jpeg" },
            { nombre: "Maquillaje 3", imagen: "Maquillaje3.jpeg" },
            { nombre: "Maquillaje 4", imagen: "Maquillaje4.jpeg" },
            { nombre: "Maquillaje 5", imagen: "Maquillaje5.jpeg" },
            { nombre: "Maquillaje 6", imagen: "Maquillaje6.jpeg" },
            { nombre: "Maquillaje 7", imagen: "Maquillaje7.jpeg" },
            { nombre: "Maquillaje 8", imagen: "Maquillaje8.jpeg" },
            { nombre: "Maquillaje 9", imagen: "Maquillaje9.jpeg" },
            { nombre: "Maquillaje 10", imagen: "Maquillaje10.jpeg" },
            { nombre: "Maquillaje 11", imagen: "Maquillaje11.jpeg" },
            { nombre: "Maquillaje 12", imagen: "Maquillaje12.jpeg" },
            { nombre: "Maquillaje 13", imagen: "Maquillaje13.jpeg" },
            { nombre: "Maquillaje 14", imagen: "Maquillaje14.jpeg" },
            { nombre: "Maquillaje 15", imagen: "Maquillaje15.jpeg" },
            { nombre: "Maquillaje 16", imagen: "Maquillaje16.jpeg" },
            { nombre: "Maquillaje 17", imagen: "Maquillaje17.jpeg" },
            { nombre: "Maquillaje 18", imagen: "Maquillaje18.jpeg" },
            { nombre: "Maquillaje 19", imagen: "Maquillaje19.jpeg" },
            { nombre: "Maquillaje 20", imagen: "Maquillaje20.jpeg" }
        ]

    };

    const catalogo = document.getElementById("catalogo");
    const catalogoGrid = document.getElementById("catalogo-grid");
    const catalogoTitulo = document.getElementById("catalogo-titulo");
    const catalogoDescripcion = document.getElementById("catalogo-descripcion");
    const catalogoVacio = document.getElementById("catalogo-vacio");
    const cerrarCatalogoBtn = document.getElementById("cerrar-catalogo");

    const nombresCategorias = {
        abrigos: "Abrigos",
        ropa: "Ropa",
        maquillaje: "Maquillaje"
    };

    // FUNCIÓN PARA ABRIR EL CATÁLOGO
    function abrirCatalogo(categoria) {

        if (!productosCatalogo[categoria]) {
            return;
        }

        const productos = productosCatalogo[categoria];

        catalogoGrid.innerHTML = "";

        catalogoTitulo.textContent =
            `Catálogo de ${nombresCategorias[categoria]}`;

        catalogoDescripcion.textContent =
            `Explora los productos de ${nombresCategorias[categoria]} de Abrigos Hidalgo.`;

        catalogoVacio.hidden = productos.length > 0;

        productos.forEach(producto => {

            const tarjeta = document.createElement("article");
            tarjeta.className = "catalogo-item";

            const imagen = document.createElement("img");

            imagen.src = producto.imagen;
            imagen.alt = producto.nombre;
            imagen.loading = "lazy";

            imagen.addEventListener("click", () => {
                mostrarImagen(producto);
            });

            // Si la fotografía no existe, se elimina la tarjeta.
            imagen.addEventListener("error", () => {
                tarjeta.remove();
            }, { once: true });

            const nombre = document.createElement("h3");
            nombre.textContent = producto.nombre;

            tarjeta.append(imagen, nombre);

            catalogoGrid.appendChild(tarjeta);
        });

        catalogo.hidden = false;

        catalogo.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    // FUNCIÓN PARA CERRAR EL CATÁLOGO
    function cerrarCatalogo() {

        catalogo.hidden = true;

        document.getElementById("productos").scrollIntoView({
            behavior: "smooth"
        });
    }

    // VISOR PARA AMPLIAR LAS FOTOGRAFÍAS
    const visor = document.getElementById("visor-imagen");
    const visorFoto = document.getElementById("visor-foto");
    const visorNombre = document.getElementById("visor-nombre");

    function mostrarImagen(producto) {

        visorFoto.src = producto.imagen;
        visorFoto.alt = producto.nombre;

        visorNombre.textContent = producto.nombre;

        visor.classList.add("activo");
        visor.setAttribute("aria-hidden", "false");
    }

    // FUNCIÓN PARA CERRAR EL VISOR
    function cerrarVisor() {

        visor.classList.remove("activo");

        visor.setAttribute("aria-hidden", "true");

        visorFoto.src = "";
    }

    // AMPLÍA EL RENDER 3D AL HACER CLIC EN ÉL
    const renderImg = document.getElementById("render-3d-img");
    if (renderImg) {
        renderImg.addEventListener("click", () => {
            mostrarImagen({
                nombre: "Render 3D del Producto — Abrigos Hidalgo",
                imagen: renderImg.getAttribute("src")
            });
        });
    }

    // CONTROLES DEL VIDEO PUBLICITARIO 3D
    const video3d = document.getElementById("video-3d-anuncio");
    const btnPlay3d = document.getElementById("btn-play-3d");
    const btnReiniciar3d = document.getElementById("btn-reiniciar-3d");

    if (video3d && btnPlay3d) {
        btnPlay3d.addEventListener("click", () => {
            if (video3d.paused) {
                video3d.play();
            } else {
                video3d.pause();
            }
        });
    }

    if (video3d && btnReiniciar3d) {
        btnReiniciar3d.addEventListener("click", () => {
            video3d.currentTime = 0;
            video3d.play();
        });
    }

    // BOTONES VER CATÁLOGO
    document.querySelectorAll("[data-categoria]").forEach(boton => {

        boton.addEventListener("click", () => {

            abrirCatalogo(boton.dataset.categoria);

        });

    });

    // BOTÓN REGRESAR A PRODUCTOS
    cerrarCatalogoBtn.addEventListener("click", cerrarCatalogo);

    // BOTÓN CERRAR IMAGEN
    document.getElementById("visor-cerrar").addEventListener("click", cerrarVisor);

    // CERRAR EL VISOR AL HACER CLIC FUERA DE LA IMAGEN
    visor.addEventListener("click", event => {

        if (event.target === visor) {
            cerrarVisor();
        }

    });

    // CERRAR CON LA TECLA ESCAPE
    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            cerrarVisor();
        }

    });

});