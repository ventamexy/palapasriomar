(function ($) {
  "use strict";

  // Preloader (if the #preloader div exists)
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

});

window.addEventListener("load", function() {

  // Selección de opción del menú en base a la sección actual.
  let pagina = window.location.pathname;
  if ( pagina != "/" ) {

      let arrayAhref = $("#navPrincipal ul li a");
      arrayAhref.removeClass("item-activo");
      for (var i = 0; i < arrayAhref.length; i++) {
          let elemento = arrayAhref[i];
          if ( elemento.pathname == pagina ) {
              elemento.classList.add("item-activo");
              // --- Se agrega la clase para no mostrar el borde inferior del elemento.
              contenedorPadre = elemento.parentNode;
              contenedorPadre.classList.add("background-color-none");
              return;
          }
          
      }

  }

});

// Nuevo JS

// Movimiento scroll
$(document).on("scroll", function() {

  let scrollYPosicionActual = $(this)[0].scrollingElement.scrollTop;
  if ( scrollYPosicionActual >= 200 ) {
      $("#navbar")[0].classList.add("menu-fijado");
  } else {
      $("#navbar")[0].classList.remove("menu-fijado");
  }

  var scrollY = document.scrollingElement;
  var alturaScrollY = scrollY.offsetHeight - scrollY.clientHeight;
  
  if ( alturaScrollY == scrollYPosicionActual ) {
      $(".irAbajo i").addClass("transform-r-180");
      $(".irAbajo").removeClass("irAbajo").addClass("irArriba");
  } else {
      $(".irAbajo i").removeClass("transform-r-180");
      $(".irArriba").removeClass("irArriba").addClass("irAbajo");
  }
  
});


$(document).on("click", ".irAbajo", function(){
  let scrollY = document.scrollingElement;
  let alturaScrollY = scrollY.offsetHeight - scrollY.clientHeight;
  window.scroll({
      top: alturaScrollY,
      behavior: 'smooth'
  });
});

$(document).on("click", ".irArriba", function(){
  window.scroll({
      top: 0,
      behavior: 'smooth'
  });
});