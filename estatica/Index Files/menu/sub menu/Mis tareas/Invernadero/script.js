const contenidoDiv = document.getElementById('contenido');

const pages = {
    inicio: `
        <h2>El invernadero, tu web sobre las plantas.</h2>
        <h3>Todo lo que tienes que saber sobre las plantas.</h3>
        <img src="./Mi primera página web_files/imagenes/cerezo.jpg" alt="cerezo japonés" style="width:100%; max-width:600px; display:block; margin:20px 0;" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27800%27 height=%27200%27 viewBox=%270 0 800 200%27%3E%3Crect width=%27800%27 height=%27200%27 fill=%274caf50%27/%3E%3Ctext x=%27400%27 y=%27110%27 font-size=%2736%27 text-anchor=%27middle%27 fill=%27white%27 font-weight=%27bold%27%3E🌿 El Invernadero 🌿%3C/text%3E%3Ctext x=%27400%27 y=%27155%27 font-size=%2720%27 text-anchor=%27middle%27 fill=%27%23e8f5e9%27%3ETu web sobre las plantas%3C/text%3E%3C/svg%3E'">
        <p>Bienvenido a mi web, una web creada por y para los amantes de las plantas, aquí vamos a poder encontrar muchas formas de conocerlas, los tipos de plantas, algunos consejos para el jardín y nuestra sección sobre jardinería japonesa donde descubrirás el mundo de los bonsais, prebonsais y todo hacerca de estas maravillosas miniaturas.</p>
        <p>No dudes en ponerte en contacto conmigo si tienes alguna duda al respecto, utiliza la sección de "contacto" y te responderé lo más brevemente posible.</p>
    `,
    
    tipos: `
        <h2>Tipos de plantas</h2>
        <h3>Descubre la diversidad del reino vegetal</h3>
        <div class="plantas-grid">
            <div class="planta-card">
                <img src="./Martin Chable Jenifer Joana/Index Files/Evidencias Tareas/Mis tareas/Invernadero/Mi primera página web_files/imagenes/bonsai1.jpg" alt="Plantas de interior"> onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27800%27 height=%27200%27 viewBox=%270 0 800 200%27%3E%3Crect width=%27800%27 height=%27200%27 fill=%274caf50%27/%3E%3Ctext x=%27400%27 y=%27110%27 font-size=%2736%27 text-anchor=%27middle%27 fill=%27white%27 font-weight=%27bold%27%3E🌿 El Invernadero 🌿%3C/text%3E%3Ctext x=%27400%27 y=%27155%27 font-size=%2720%27 text-anchor=%27middle%27 fill=%27%23e8f5e9%27%3ETu web sobre las plantas%3C/text%3E%3C/svg%3E'">
    </div>
                <h4>Plantas de interior</h4>
                <p>Perfectas para decorar tu hogar. Fáciles de cuidar y purifican el aire.</p>
            </div>
            <div class="planta-card">
                <img src="/Martin Chable Jenifer Joana/Index Files/Evidencias Tareas/Mis tareas/Invernadero/Mi primera página web_files/imagenes/exterior.png" alt="Plantas de exterior">
                <h4>Plantas de exterior</h4>
                <p>Resistentes al sol y a las inclemencias del tiempo. Ideales para jardines.</p>
            </div>
            <div class="planta-card">
                <img src="/Martin Chable Jenifer Joana/Index Files/Evidencias Tareas/Mis tareas/Invernadero/Mi primera página web_files/imagenes/flor.png" alt="Plantas con flor">
                <h4>Plantas con flor</h4>
                <p>Aportan color y alegría a cualquier espacio. Florecen en primavera.</p>
            </div>
            <div class="planta-card">
                <img src="/Martin Chable Jenifer Joana/Index Files/Evidencias Tareas/Mis tareas/Invernadero/Mi primera página web_files/imagenes/aromaticas.jpg" alt="Plantas aromáticas">
                <h4>Plantas aromáticas</h4>
                <p>Perfectas para cocinar y aromatizar tu hogar. Menta, romero, albahaca.</p>
            </div>
        </div>
    `,
    
    briconsejos: `
        <h2>Briconsejos de jardinería</h2>
        <h3>Consejos prácticos para cuidar tus plantas</h3>
        <ul class="consejos-list">
            <li>
                <img src="[K: imagen-riego.jpg]" alt="Riego">
                <div><strong>Riego adecuado:</strong> Riega tus plantas temprano en la mañana o al atardecer para evitar la evaporación rápida del agua.</div>
            </li>
            <li>
                <img src="[K: imagen-luz-solar.jpg]" alt="Luz solar">
                <div><strong>Luz solar:</strong> Cada planta necesita diferentes niveles de luz. Investiga las necesidades específicas de cada especie.</div>
            </li>
            <li>
                <img src="[K: imagen-abono.jpg]" alt="Abono">
                <div><strong>Abono natural:</strong> Utiliza compost casero para nutrir tus plantas de forma ecológica y económica.</div>
            </li>
            <li>
                <img src="[K: imagen-poda.jpg]" alt="Poda">
                <div><strong>Poda regular:</strong> Elimina hojas secas y ramas dañadas para estimular el crecimiento saludable.</div>
            </li>
            <li>
                <img src="[K: imagen-plagas.jpg]" alt="Plagas">
                <div><strong>Control de plagas:</strong> Usa remedios naturales como jabón potásico o aceite de neem para combatir plagas.</div>
            </li>
        </ul>
    `,
    
    zonaoriental: `
        <h2>Zona oriental</h2>
        <h3>El arte de los bonsáis y la jardinería japonesa</h3>
        <img src="[K: imagen-bonsai-principal.jpg]" alt="Bonsái japonés" style="width:100%; max-width:500px; display:block; margin:20px 0;">
        <p>El bonsái es un arte japonés que consiste en cultivar árboles en miniatura, recreando las formas y proporciones de los árboles en la naturaleza. Esta práctica milenaria requiere paciencia, dedicación y mucho cariño.</p>
        <div class="plantas-grid">
            <div class="planta-card">
                <img src="[K: imagen-arce-bonsai.jpg]" alt="Arce bonsái">
                <h4>Arce Japonés</h4>
                <p>Famoso por sus hojas rojas en otoño. Necesita semisombra y riego constante.</p>
            </div>
            <div class="planta-card">
                <img src="[K: imagen-pino-bonsai.jpg]" alt="Pino bonsái">
                <h4>Pino</h4>
                <p>Muy resistente, símbolo de longevidad. Necesita mucho sol y poca agua.</p>
            </div>
            <div class="planta-card">
                <img src="[K: imagen-cerezo-bonsai.jpg]" alt="Cerezo bonsái">
                <h4>Cerezo</h4>
                <p>Famoso por sus flores primaverales. Muy apreciado en la cultura japonesa.</p>
            </div>
        </div>
        <p>Los prebonsáis son árboles que están en proceso de formación. Cualquier persona puede comenzar con un prebonsái y darle forma con paciencia. Las técnicas incluyen alambrado, poda de ramas y raíces, y trasplantes periódicos.</p>
    `,
    
    contacto: `
        <h2>Contacto</h2>
        <h3>¿Tienes alguna duda? Escríbenos</h3>
        <div class="contacto-form">
            <form id="formContacto">
                <div class="form-group">
                    <label for="nombre">Nombre completo:</label>
                    <input type="text" id="nombre" name="nombre" required>
                </div>
                <div class="form-group">
                    <label for="email">Correo electrónico:</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="mensaje">Mensaje:</label>
                    <textarea id="mensaje" name="mensaje" rows="5" required></textarea>
                </div>
                <button type="submit" class="btn-enviar">Enviar mensaje</button>
            </form>
            <p id="mensajeEnviado" style="margin-top: 20px; color: #2e7d32; font-weight: bold;"></p>
        </div>
    `
};

function loadPage(pageId) {
    if (pages[pageId]) {
        contenidoDiv.innerHTML = pages[pageId];
        
        if (pageId === 'contacto') {
            const form = document.getElementById('formContacto');
            if (form) {
                form.addEventListener('submit', function(e) {
                    e.preventDefault();
                    const mensajeEnviado = document.getElementById('mensajeEnviado');
                    mensajeEnviado.textContent = 'Mensaje enviado con éxito. Te responderemos pronto.';
                    form.reset();
                    setTimeout(() => {
                        mensajeEnviado.textContent = '';
                    }, 4000);
                });
            }
        }
    }
}

const menuLinks = document.querySelectorAll('#menu ul li a');
menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const page = this.getAttribute('data-page');
        
        menuLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        
        loadPage(page);
    });
});

loadPage('inicio');