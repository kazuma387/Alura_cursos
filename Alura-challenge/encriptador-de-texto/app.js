// creando variables
const textoInput = document.getElementById('texto-input'),
    encriptarBtn = document.getElementById('encriptar'),
    desencriptarBtn = document.getElementById('desencriptar'),
    resultado = document.getElementById('resultado'),
    copiarBtn = document.getElementById('copiar'),
    imagen = document.getElementById('img-result'),
    areaResult = document.querySelector('.area-result')


// Creando Funciones
function encriptarTexto(texto) {
    const reglas = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    let textoEncriptado = texto;
    for (const letra in reglas) {
        textoEncriptado = textoEncriptado.replace(new RegExp(letra, 'g'), reglas[letra]);
    }
    return textoEncriptado;
}

function desencriptarTexto(texto) {
    const reglas = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    let textoDesencriptado = texto;
    for (const letra in reglas) {
        textoDesencriptado = textoDesencriptado.replace(new RegExp(letra, 'g'), reglas[letra]);
    }
    return textoDesencriptado;
}

// para limpiar la caja
const limpiarCaja = () => document.getElementById('texto-input').value = '';

// mostrar boton copiar y ocultar img
function mostrarBtn() {
    // Si el boton está oculta, mostrarlo
    if(copiarBtn.classList.contains('hidden')) {
        copiarBtn.classList.remove('hidden');
        imagen.classList.add('hidden');
    }
}

function alturaResultadoTextarea() {
    if(!areaResult.classList.contains('heigth')) {
        areaResult.classList.add('heigth');
    }
}

function alinearTextStart() {
    if(!resultado.classList.contains('text-aling')) {
        resultado.classList.add('text-aling');
    }
}

// Creando Eventos
encriptarBtn.addEventListener('click', () => {
    const texto = textoInput.value.toLowerCase();
    if (texto === '') {
        alert('Ingrese el texto que desea encriptar')
        return;
    }else if (/[^a-z]\s/g.test(texto)) {
        alert('Solo se permiten letras minúsculas sin acentos.');
        return;
    }
    limpiarCaja()
    mostrarBtn()
    alinearTextStart()
    alturaResultadoTextarea()
    resultado.value = encriptarTexto(texto);
});

desencriptarBtn.addEventListener('click', () => {
    const texto = textoInput.value.toLowerCase();
    if (texto === '') {
        alert('Ingrese el texto que desea desencriptar')
        return;
    }else if (/[^a-z]\s/g.test(texto)) {
        alert('Solo se permiten letras minúsculas sin acentos.');
        return;
    }
    limpiarCaja()
    mostrarBtn()
    alinearTextStart()
    alturaResultadoTextarea()
    resultado.value = desencriptarTexto(texto);
});

document.addEventListener('DOMContentLoaded', function() {
    // ajustar el textarea de input
    textoInput.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });

    copiarBtn.addEventListener('click', function() {
        resultado.select();
        resultado.setSelectionRange(0, 99999); // Para dispositivos móviles

        navigator.clipboard.writeText(resultado.value)
            .then(function() {
                // Crea el elemento del aviso
                const aviso = document.createElement('div');
                aviso.textContent = 'Texto copiado';
                aviso.style.position = 'fixed'; // Para que aparezca encima del contenido
                aviso.style.top = '10px'; 
                aviso.style.left = '50%';
                aviso.style.transform = 'translateX(-50%)'; // Centrar horizontalmente
                aviso.style.backgroundColor = '#4CAF50'; // Verde para éxito
                aviso.style.color = 'white';
                aviso.style.padding = '10px 20px';
                aviso.style.borderRadius = '5px';
                aviso.style.zIndex = '1000'; // Asegurar que esté encima de otros elementos

                document.body.appendChild(aviso); 

                // Elimina el aviso después de 2 segundos
                setTimeout(function() {
                    document.body.removeChild(aviso);
                }, 2000);
            })
            .catch((error) => console.error('Error al copiar el texto: ', error));
    });
});


