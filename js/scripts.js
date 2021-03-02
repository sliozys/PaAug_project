/*!
    * Start Bootstrap - Freelancer v6.0.5 (https://startbootstrap.com/theme/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
    */
    (function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery); // End of use strict
  
  (function() {
//Product array list
  let products = [
    {
      id: 1,
      title: "smyglius",
      image: "assets/img/callers/caller1.jpg",
      price: 16.91,
    },
    {
      id: 2,
      title: "orbita",
      image: "assets/img/callers/caller2.jpg",
      price: 19.99,
    },
    {
      id: 3,
      title: "mielynkis",
      image: "assets/img/callers/caller3.jpg",
      price: 250.69,
    },  
    {
      id: 4,
      title: "Grifų gniūžtis",
      image: "assets/img/callers/caller4.jpg",
      price: 69.42,
    },
    {
      id: 5,
      title: "Buks",
      image: "assets/img/callers/caller5.jpg",
      price: 33.33,
    },
    {
      id: 6,
      title: "Žalia",
      image: "assets/img/callers/caller6.jpg",
      price: 100.01,
    },   
    ];


 products.map((products)=> {
  document.querySelector("#portfolioGrid").innerHTML += `
     <div class="modal-content col-4">
           <div class="modal-body text-center">
               <div class="container">
                   <div class="row justify-content-center">
                       <div class="col-lg-12">
                           <!-- Portfolio Modal - Title-->
                           <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0 pavadinims" >${products.title}</h2>
                           <!-- Icon Divider-->
                           <div class="divider-custom">
                               <div class="divider-custom-line"></div>
                               <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                               <div class="divider-custom-line"></div>
                           </div>
                           <!-- Portfolio Modal - Image-->
                           <img  class="img-fluid rounded mb-5 nuotrauka" src="${products.image}" alt="" />
                           <!-- Portfolio Modal - Text-->
                           <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                           <!-- <button class="btn btn-primary" data-dismiss="modal">
                               <i class="fas fa-times fa-fw"></i>
                               Close Window
                           </button> -->
                           <p class="h2 text-secondary kaina" >${products.price}<i class="fas fa-euro-sign"></i></p>
                           <button class="btn-sm btn-outline-info btn-block addToCardededed"> 
                               <i class="h3">
                                   Add to Cart  
                               </i>
                                 <i class="https://github.com/sliozys/PaAug_project.git" aria-hidden="true">
                               </i>
                           </button>
                       </div>
                   </div>
               </div>
           </div>
       </div>
  `;
});  


//  BANDOMASIS IDEJIMS I KREPSELI

    // var cart = document.getElementById("cart");
    // cart.addEventListener("click", drawCart);
    // console.log('clicked')


    //add to cart button
    var addinamToCartButton = document.getElementsByClassName('addToCardededed')
    var krepselisAntkakliams;
    var skaiciaiKrepselioIkonai;
    for(var i = 0; i < addinamToCartButton.length; i++) {
      var button = addinamToCartButton[i]
      button.addEventListener('click', addToCart
      // function() {
      //   console.log('clicked')
      // }
      )
      console.log(krepselisAntkakliams)
    };

  
  // 
    function addToCart() {
    
      var active = document.activeElement;
      var selectedBook = {
          selectedBookName: active.parentElement.firstChild.textContent,
          selectedBookImage: active.parentElement.chil.getAttribute("src"),
          selectedBookPrice: active.querySelector(".kaina").textContent
      }
      krepselisAntkakliams.push(selectedBook);
      
      localStorage.setItem("cart", JSON.stringify(krepselisAntkakliams));
//KOREGUOT
      updateCartStatus();
//KOREGUOT
      showAddConfirmation();
  }
})();