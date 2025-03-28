document.getElementById('entrar').addEventListener('click', function () {
    this.style.display = 'none';
    document.querySelector('.cortina.izquierda').classList.add('abierta-izquierda');
    document.querySelector('.cortina.derecha').classList.add('abierta-derecha');
    
    setTimeout(() => {
        document.getElementById('portada').style.display = 'none';
        document.getElementById('contenido').style.display = 'block';
    }, 2000);
});

document.querySelectorAll('.plato-nombre').forEach(button => {
    button.addEventListener('click', function () {
        let info = this.nextElementSibling;
        info.style.display = info.style.display === 'block' ? 'none' : 'block';
    });
});
