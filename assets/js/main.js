/**
* Template Name: Ninestars - v4.10.0
* Template URL: https://bootstrapmade.com/ninestars-free-bootstrap-3-theme-for-creative/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";


  

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /*
   * Porfolio isotope and filter
   
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        projectsIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        projectsIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  }); */

  /**
   * Initiate portfolio lightbox 
   */
  const projectsLightbox = GLightbox({
    selector: '.projects-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.projects-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Clients Slider
   */
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });

})()

function openNav() {
  document.getElementById("navbar").style.width = "100%";
}

function closeNav() {
  document.getElementById("navbar").style.width = "0%";
}



// function splitScroll(){
//   const controller = new ScrollMagic.Controller();

//   new ScrollMagic.Scene({
//     duration: '200%',
//     triggerElement: '.about-title',
//     //sets where the trigger is activated from
//     triggerHook:0
//   })
//   .setPin('.about-title')
//   .addIndicators()
//   .addTo(controller)
// }

// $(window).resize(function(){
//   if( $(this).width() >= 992 ) {
//   splitScroll();
// } });

function scrollAppear(){
  const project1Text = document.querySelector('.project1-text');
  const project2Text = document.querySelector('.project2-text');
  const project3Text = document.querySelector('.project3-text');
  const project1Position = project1Text.getBoundingClientRect().top;
  const project2Position = project2Text.getBoundingClientRect().top;
  const project3Position = project3Text.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.3;
  if(project1Position < screenPosition){
    project1Text.classList.add('project-text-appear')
  }
  if(project2Position < screenPosition){
    project2Text.classList.add('project-text-appear')
  }
  if(project3Position < screenPosition){
    project3Text.classList.add('project-text-appear')
  }
}

window.addEventListener('scroll', scrollAppear);

document.querySelector('a[href^="#"]').addEventListener('click', function(event) {
  event.preventDefault();

  document.querySelector(this.getAttribute('href')).scrollIntoView({
    behavior: 'smooth'
  });
});


function changeImage(imageName, element) {
  var displayedImage = document.getElementById('displayed-image');
  displayedImage.src = imageName;

  // Remove the 'active' class from all links
  var links = document.querySelectorAll('.service-list a');
  links.forEach(function(link) {
    link.classList.remove('active');
  });

  // Add the 'active' class to the hovered link
  element.classList.add('active');
}


let currentIndex = 0;
const totalCards = document.querySelectorAll('.card').length;

function showSlide(index) {
  const sliderWrapper = document.querySelector('.slider-wrapper');
  const cardWidth = document.querySelector('.card').offsetWidth;

  if (index >= 0 && index < totalCards) {
    currentIndex = index;
    sliderWrapper.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
  }
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function nextSlide() {
  showSlide(currentIndex + 1);
}