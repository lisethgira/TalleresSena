document.addEventListener('DOMContentLoaded', function () {
    // Código para activar el menú desplegable
    const dropdownLink = document.getElementById('dropdown-link');
    const dropdownLink2 = document.getElementById('dropdown-link2');
    const dropdownLink3 = document.getElementById('dropdown-link3');
    const dropdownLink4 = document.getElementById('dropdown-link4');
    
    dropdownLink.addEventListener('click', function () {
        this.nextElementSibling.classList.toggle('show'); // Agrega o remueve la clase 'show' en el siguiente elemento
    });

    dropdownLink2.addEventListener('click', function () {
        this.nextElementSibling.classList.toggle('show'); // Agrega o remueve la clase 'show' en el siguiente elemento
    });

    dropdownLink3.addEventListener('click', function () {
        this.nextElementSibling.classList.toggle('show'); // Agrega o remueve la clase 'show' en el siguiente elemento
    });

    dropdownLink4.addEventListener('click', function () {
        this.nextElementSibling.classList.toggle('show'); // Agrega o remueve la clase 'show' en el siguiente elemento
    });
});

const dropdownResponsive = document.getElementById('dropdown-responsive');


dropdownResponsive.addEventListener('click', function () {
    this.nextElementSibling.classList.toggle('show'); // Agrega o remueve la clase 'show' en el siguiente elemento
});