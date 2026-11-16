(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    

    const whatsappSameNo = document.getElementById('whatsappSameNo');
        const whatsappSameYes = document.getElementById('whatsappSameYes');
        const whatsappNumberField = document.getElementById('whatsappNumberField');

        whatsappSameNo.addEventListener('change', () => {
            whatsappNumberField.classList.remove('d-none');
        });

        whatsappSameYes.addEventListener('change', () => {
            whatsappNumberField.classList.add('d-none');
        });


    $(document).ready(function() {
    // Initialiser Owl Carousel
    $('.testimonial-carousel').owlCarousel({
        loop: true,              // Faire défiler en boucle
        margin: 20,              // Espacement entre les éléments
        nav: true,               // Flèches de navigation
        dots: true,              // Affichage des points
        autoplay: true,          // Activation du défilement automatique
        autoplayTimeout: 3000,   // Temps entre chaque défilement (en ms)
        autoplayHoverPause: true, // Mettre en pause lors du survol
        responsive: {
            0: {
                items: 1          // Afficher 1 élément sur les petits écrans
            },
            600: {
                items: 2          // Afficher 2 éléments sur les écrans moyens
            },
            1000: {
                items: 3          // Afficher 3 éléments sur les grands écrans
            }
        }
    });
    
    // Initialisation de Magnific Popup pour les vidéos
    $('.video-popup').magnificPopup({
    type: 'iframe',
    iframe: {
        patterns: {
            youtube: {
                index: 'youtube.com/',
                id: 'v=',
                src: 'https://www.youtube.com/embed/%id%?autoplay=1'
            }
        },
        srcAction: 'iframe_src',
    }
    });
    });
    
})(jQuery);

