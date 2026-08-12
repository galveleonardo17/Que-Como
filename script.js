let seleccion = { base: '', detalle: '', animo: '' };

const datosGuarnicion = {
    "Carnes Rojas": ["Papas y Raíces", "Ensaladas", "Vegetales", "Verdes"],
    "Cerdo": ["Papas y Raíces", "Arroz / Cereales", "Legumbres", "Ensaladas"],
    "Pollo": ["Papas y Raíces", "Arroz / Cereales", "Vegetales", "Ensaladas", "Legumbres"],
    "Pescados / Mariscos": ["Papas y Raíces", "Ensaladas", "Arroz / Cereales", "Vegetales"]
};

const datosVariedad = {
    "Masas": ["🍕 Pizzas", "🥧 Tartas / Pascualinas", "🥟 Empanadas", "🌮 Wraps / Tacos", "🥞 Panqueques Salados"],
    "Pastas": ["🍝 Fideos largos", "🥟 Pastas rellenas", "🥔 Ñoquis", "🌀 Pastas secas cortas", "🥮 Canelones / Lasagna"],
    "Cocina de Olla": ["🍲 Guisos tradicionales", "🥩 Estofados y Cacerolas", "🥣 Sopas / Cremas", "🍛 Locro / Carbonada", "🌾 Risottos"],
    "Legumbres / Vegetal": ["🍔 Medallones vegetales", "🥗 Ensaladas frías", "🧆 Falafel o Croquetas", "🥣 Cremas y Dips", "🥘 Salteados o Woks"]
};

function verGuarniciones(base) {
    seleccion.base = base;
    ocultarTodo();
    document.getElementById('p2').classList.remove('hidden');
    document.getElementById('titulo-guarnicion').innerText = "Para: " + base;
    
    let html = "";
    (datosGuarnicion[base] || []).forEach(g => {
        html += `<div class="item" onclick="verAnimos('${base}', '${g}')">${g} <span>→</span></div>`;
    });
    document.getElementById('lista-guarniciones').innerHTML = html;
    window.scrollTo(0,0);
}

function verVariedad(base) {
    seleccion.base = base;
    ocultarTodo();
    document.getElementById('p_variedad').classList.remove('hidden');
    document.getElementById('titulo-variedad').innerText = "Para: " + base;
    
    let html = "";
    (datosVariedad[base] || []).forEach(v => {
        html += `<div class="item" onclick="verAnimos('${base}', '${v}')">${v} <span>→</span></div>`;
    });
    document.getElementById('lista-variedad').innerHTML = html;
    window.scrollTo(0,0);
}

function verAnimos(base, detalle) {
    seleccion.base = base;
    seleccion.detalle = detalle;
    ocultarTodo();
    document.getElementById('p3').classList.remove('hidden');
    document.getElementById('subtitulo-final').innerText = base + " (" + detalle + ")";
    window.scrollTo(0,0);
}

function verConsejos(animo) {
    seleccion.animo = animo;
    ocultarTodo();
    document.getElementById('p_consejos').classList.remove('hidden');
    
    document.getElementById('texto-recomendacion').innerText = 
        animo === 'Rápido' ? "Utiliza ingredientes pre-cortados y salteá a fuego máximo para tener el plato listo en minutos." :
        animo === 'Abuela' ? "Cocina a fuego lento y tapado para que los sabores se concentren y la textura sea perfecta." :
        animo === 'Domingo' ? "Tomate tu tiempo en el armado, cuida la presentación y disfruta cada paso de la receta." :
        "Busca frescura en los condimentos y usa técnicas al vapor o plancha rápida.";

    document.getElementById('texto-maridaje').innerText = "Ideal para acompañar con un vino tinto joven o una bebida bien fría según la preferencia.";
    window.scrollTo(0,0);
}

function verPlatoFinal() {
    ocultarTodo();
    document.getElementById('p_resultado').classList.remove('hidden');
    
    document.getElementById('res-tag-animo').innerText = "Estilo " + seleccion.animo + " • ¡Buen provecho!";
    document.getElementById('res-titulo').innerText = seleccion.base + " con " + seleccion.detalle;
    
    window.scrollTo(0,0);
}

function volverA(id) {
    ocultarTodo();
    document.getElementById(id).classList.remove('hidden');
    window.scrollTo(0,0);
}

function ocultarTodo() {
    ['p1', 'p2', 'p_variedad', 'p3', 'p_consejos', 'p_resultado'].forEach(id => document.getElementById(id).classList.add('hidden'));
}
