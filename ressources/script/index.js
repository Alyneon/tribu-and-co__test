$(function() {
    /*
    SCROLL DRAG & DROP
    */
    let isDragging = false;
    let mouseStartX = 0;
    let scrollX = 0;
    let currentElement = null;
  
    // Début du drag & drop
    $('.dishes-card-grid, .testimonial-card-grid').on('mousedown', function(e) {
        // Marquer le début du drag & drop
        isDragging = true;

        // Identifier l'élément où le scroll s'effectue
        currentElement = $(this);
        
        // Définir la position initiale de la souris
        mouseStartX = e.pageX;

        // Définir la position de scroll
        scrollX = currentElement.scrollLeft();
    });
  
    // Pendant le drag & drop 
    $(document).on('mousemove', function(e) {
        // Lorsqu'il y a un drag & drop en cours
        if (isDragging) {
            // Définir la position actuelle de la souris
            let mouseX = e.pageX;

            // Calculer la distance
            let distance = mouseX - mouseStartX;

            // Déplacer la scrollbar à sa nouvelle position
            currentElement.scrollLeft(scrollX - distance);
        }
    });

    // Fin du drag & drop
    $(document).on('mouseup', function() {
        // Marquer la fin du drag & drop
        isDragging = false;
        
        // Ne plus identifier l'élément où le scroll s'effectue
        currentElement = null;
    });



    /*
    CHANGEMENT D'ETAT DU MENU BURGER
    */
    $('.navbar__burger').on('click', function() {
        $(this).toggleClass('navbar__burger--open');
        $(this).closest('.navbar').find('.navbar__menu').toggleClass('navbar__menu--visible');
    });

});
  