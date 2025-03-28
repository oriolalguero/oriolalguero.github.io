document.getElementById('entrar').addEventListener('click', function() {
    document.querySelector('.cortinas').classList.add('abiertas');
    setTimeout(() => {
        document.getElementById('portada').style.display = 'none';
        document.getElementById('contenido').style.display = 'block';
    }, 2000);
});

document.querySelectorAll('.info-btn').forEach(button => {
    button.addEventListener('click', function() {
        let info = this.nextElementSibling;
        info.style.display = info.style.display === 'block' ? 'none' : 'block';
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const dishes = document.querySelectorAll('.plato');

    dishes.forEach(dish => {
        const dishName = dish.querySelector('.plato-nombre');
        const dishInfo = dish.querySelector('.plato-info');

        // Initially hide the dish info
        dishInfo.style.display = "none";

        dishName.addEventListener('click', () => {
            // Toggle the display of the dish information
            if (dishInfo.style.display === "none" || dishInfo.style.display === "") {
                dishInfo.style.display = "block";
            } else {
                dishInfo.style.display = "none";
            }
        });
    });
});
document.getElementById('entrar').addEventListener('click', function() {
    this.style.display = 'none';
    document.querySelector('.cortina.izquierda').classList.add('abierta-izquierda');
    document.querySelector('.cortina.derecha').classList.add('abierta-derecha');
    setTimeout(() => {
        document.getElementById('portada').style.display = 'none';
        document.getElementById('contenido').style.display = 'block';
    }, 2000);
});
document.querySelectorAll('.info-btn').forEach(button => {
    button.addEventListener('click', function() {
        let info = this.nextElementSibling;  // Acceder al párrafo de información

        // Alternar visibilidad solo de la información correspondiente al plato seleccionado
        info.style.display = info.style.display === 'block' ? 'none' : 'block';
    });
});
