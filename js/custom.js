(function() {
	'use strict';

	var tinyslider = function() {
		var el = document.querySelectorAll('.testimonial-slider');

		if (el.length > 0) {
			var slider = tns({
				container: '.testimonial-slider',
				items: 1,
				axis: "horizontal",
				controlsContainer: "#testimonial-nav",
				swipeAngle: false,
				speed: 700,
				nav: true,
				controls: true,
				autoplay: true,
				autoplayHoverPause: true,
				autoplayTimeout: 3500,
				autoplayButtonOutput: false
			});
		}
	};
	tinyslider();
	
	var sitePlusMinus = function() {

		var value,
    		quantity = document.getElementsByClassName('quantity-container');

		function createBindings(quantityContainer) {
	      var quantityAmount = quantityContainer.getElementsByClassName('quantity-amount')[0];
	      var increase = quantityContainer.getElementsByClassName('increase')[0];
	      var decrease = quantityContainer.getElementsByClassName('decrease')[0];
	      increase.addEventListener('click', function (e) { increaseValue(e, quantityAmount); });
	      decrease.addEventListener('click', function (e) { decreaseValue(e, quantityAmount); });
	    }

	    function init() {
	        for (var i = 0; i < quantity.length; i++ ) {
						createBindings(quantity[i]);
	        }
	    };

	    function increaseValue(event, quantityAmount) {
	        value = parseInt(quantityAmount.value, 10);

	        console.log(quantityAmount, quantityAmount.value);

	        value = isNaN(value) ? 0 : value;
	        value++;
	        quantityAmount.value = value;
	    }

	    function decreaseValue(event, quantityAmount) {
	        value = parseInt(quantityAmount.value, 10);

	        value = isNaN(value) ? 0 : value;
	        if (value > 0) value--;

	        quantityAmount.value = value;
	    }
	    
	    init();
		
	};
	sitePlusMinus();


})()


AOS.init({
	duration: 1500,
})

$(document).ready(function(){
    $('.reels-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
		centermode: true,
        arrows: true,
		prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
    	nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>',
        dots: true,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		  ]
    });
	

    $('.reel video').each(function(){
        this.play();
    });
});

$(document).ready(function(){
	$('.slick-slider').slick({
	  dots: false, // Shows navigation dots
	  infinite: true, // Infinite looping
	  speed: 500, // Slide transition speed
	  slidesToShow: 1, // Number of slides to show at once
	  slidesToScroll: 1, // Number of slides to scroll
	  autoplay: true, // Enables autoplay
	  autoplaySpeed: 3000, // Autoplay speed
	  arrows: false, // Show next/prev arrows
	  adaptiveHeight: true
	});
  });


  $(document).ready(function(){
	$('.products-slide').slick({
	  dots: false, // Shows navigation dots
	  infinite: true, // Infinite looping
	  speed: 500, // Slide transition speed
	  slidesToShow: 4, // Number of slides to show at once
	  slidesToScroll: 1, // Number of slides to scroll
	  autoplay: true, // Enables autoplay
	  autoplaySpeed: 3000, // Autoplay speed
	  arrows: false, // Show next/prev arrows
	  adaptiveHeight: true,
	  initialSlide: 0,
	  centerMode: false,
	  responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: true,
			dots: true
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
	  ]
	});
  });
  $(document).ready(function(){
	$('.category-slide').slick({
	  dots: false, // Shows navigation dots
	  infinite: true, // Infinite looping
	  speed: 500, // Slide transition speed
	  slidesToShow: 7, // Number of slides to show at once
	  slidesToScroll: 7, // Number of slides to scroll
	  autoplay: true, // Enables autoplay
	  autoplaySpeed: 3000, // Autoplay speed
	  arrows: false, // Show next/prev arrows
	  adaptiveHeight: true,
	  initialSlide: 0,
	  centerMode: false,
	  responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: true,
			dots: true
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 3
		  }
		}
	  ]
	});
  });
  $(document).ready(function(){
	$('.trending-slide').slick({
	  dots: false, // Shows navigation dots
	  infinite: true, // Infinite looping
	  speed: 500, // Slide transition speed
	  slidesToShow: 6, // Number of slides to show at once
	  slidesToScroll: 6, // Number of slides to scroll
	  autoplay: true, // Enables autoplay
	  autoplaySpeed: 3000, // Autoplay speed
	  arrows: false, // Show next/prev arrows
	  adaptiveHeight: true,
	  initialSlide: 0,
	  centerMode: false,
	  responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: true,
			dots: true
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		  }
		}
	  ]
	});
  });

// Preloader
// document.addEventListener("DOMContentLoaded", function() {
//     // Preloader Animation
//     setTimeout(function() {
//       document.getElementById("text1").style.display = "none";
//       document.getElementById("text2").style.display = "block";
//       setTimeout(function() {
//         document.getElementById("text2").style.display = "none";
//         document.getElementById("text3").style.display = "block";
//         setTimeout(function() {
//           document.getElementById("text3").style.display = "none";
//           document.getElementById("text4").style.display = "block";
//           setTimeout(function() {
//           document.getElementById("preloader").style.display = "none";
//           document.getElementById("body").style.display = "block";
//           }, 700); // Change the time according to your preference (milliseconds)
//         }, 700); // Change the time according to your preference (milliseconds)
//       }, 700); // Change the time according to your preference (milliseconds)
//     }, 1000); // Change the time according to your preference (milliseconds)
//   });
document.addEventListener("DOMContentLoaded", function() {
	// Preloader Animation
	setTimeout(function() {
	  document.getElementById("text4").style.display = "block";
	  setTimeout(function() {
		document.getElementById("preloader").style.display = "none";
		document.getElementById("body").style.display = "block";
	  }, 700); // Adjust the time according to your preference (milliseconds)
	}, 500); // Initial delay before showing text4 (milliseconds)
  });

  new Swiper('.portfolio-details-slider', {
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

  // testimonial section start

        document.addEventListener("DOMContentLoaded", function () {

            const section = document.querySelector(".fr-testimonials");

            if (!section || typeof Swiper === "undefined") return;

            const testimonialSwiper = new Swiper(
                section.querySelector(".fr-testimonial-swiper"),
                {
                    slidesPerView: 1.15,
                    spaceBetween: 15,
                    speed: 600,

                    grabCursor: true,
                    watchOverflow: true,

                    autoplay: {
                        delay: 4000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    },

                    navigation: {
                        nextEl: section.querySelector(".fr-testimonial-next"),
                        prevEl: section.querySelector(".fr-testimonial-prev")
                    },

                    breakpoints: {
                        576: {
                            slidesPerView: 2,
                            spaceBetween: 18
                        },

                        992: {
                            slidesPerView: 3,
                            spaceBetween: 22
                        },

                        1400: {
                            slidesPerView: 4,
                            spaceBetween: 22
                        }
                    }
                }
            );

        });

        // testimonial section end

		<!-- category start -->

        document.addEventListener("DOMContentLoaded", function () {
            const categorySwiper = new Swiper(".tf-category-swiper", {
                slidesPerView: 1.2,
                spaceBetween: 12,

                speed: 650,

                grabCursor: true,

                watchOverflow: true,

                navigation: {
                    nextEl: ".tf-category-next",
                    prevEl: ".tf-category-prev",
                },

                breakpoints: {
                    400: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },

                    768: {
                        slidesPerView: 3,
                        spaceBetween: 18,
                    },

                    1200: {
                        slidesPerView: 4.5,
                        spaceBetween: 22,
                    },
                },
            });
        });

		// reels start


        document.addEventListener("DOMContentLoaded", function () {

            const section = document.querySelector(".fr-reels-section");

            if (!section || typeof Swiper === "undefined") return;

            const reelsSwiper = new Swiper(
                section.querySelector(".fr-reels-swiper"),
                {
                    slidesPerView: 1.5,
                    spaceBetween: 12,

                    // Smooth Sliding
                    speed: 800,

                    // Infinite Loop
                    loop: true,

                    // Automatic Sliding
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    },

                    // User Controls
                    grabCursor: true,
                    watchOverflow: true,

                    // Navigation Arrows
                    navigation: {
                        nextEl: section.querySelector(".fr-reels-next"),
                        prevEl: section.querySelector(".fr-reels-prev")
                    },

                    // Responsive Layout
                    breakpoints: {
                        576: {
                            slidesPerView: 2,
                            spaceBetween: 15
                        },

                        768: {
                            slidesPerView: 3,
                            spaceBetween: 18
                        },

                        992: {
                            slidesPerView: 4,
                            spaceBetween: 18
                        },

                        1200: {
                            slidesPerView: 5,
                            spaceBetween: 18
                        },

                        1400: {
                            slidesPerView: 6,
                            spaceBetween: 18
                        }
                    }
                }
            );

        });

		
        document.addEventListener("DOMContentLoaded", function () {

            // Initialize every Frendz product section separately
            const productSections = document.querySelectorAll(
                ".fr-product-section"
            );

            if (typeof Swiper === "undefined") {
                console.error("Swiper library is not loaded.");
                return;
            }

            productSections.forEach(function (section) {

                const sliderElement = section.querySelector(
                    ".fr-product-swiper"
                );

                const tabs = section.querySelectorAll(
                    ".fr-product-tabs .fr-tab"
                );

                const prevButton = section.querySelector(
                    ".fr-product-prev"
                );

                const nextButton = section.querySelector(
                    ".fr-product-next"
                );

                if (!sliderElement) return;

                const wrapper = sliderElement.querySelector(
                    ".swiper-wrapper"
                );

                if (!wrapper) return;

                // Store each section's original slides
                const allSlides = Array.from(
                    wrapper.querySelectorAll(".swiper-slide")
                );

                // Initialize this section's Swiper
                const productSwiper = new Swiper(sliderElement, {

                    slidesPerView: 1.2,
                    spaceBetween: 15,
                    speed: 600,

                    grabCursor: true,
                    watchOverflow: true,
                    observer: true,

                    navigation: {
                        nextEl: nextButton,
                        prevEl: prevButton
                    },

                    breakpoints: {
                        576: {
                            slidesPerView: 2,
                            spaceBetween: 15
                        },

                        768: {
                            slidesPerView: 3,
                            spaceBetween: 18
                        },

                        1200: {
                            slidesPerView: 5,
                            spaceBetween: 18
                        }
                    }
                });

                // Filtering for this section only
                tabs.forEach(function (tab) {

                    tab.addEventListener("click", function () {

                        const category = tab.dataset.filter;

                        // Update active tab in this section
                        tabs.forEach(function (item) {
                            item.classList.remove("active");
                        });

                        tab.classList.add("active");

                        // Filter original product slides
                        const filteredSlides = allSlides.filter(
                            function (slide) {
                                return category === "all" ||
                                    slide.dataset.category === category;
                            }
                        );

                        // Remove current slides and insert filtered slides
                        wrapper.replaceChildren(...filteredSlides);

                        // Refresh Swiper after DOM changes
                        productSwiper.update();

                        // Reset slider to the first product
                        productSwiper.slideTo(0, 0);

                        // Refresh navigation
                        if (productSwiper.navigation) {
                            productSwiper.navigation.update();
                        }

                    });

                });

            });

        });


        // testimonial section start

		// seo content start
		document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("readMoreBtn");
    const content = document.getElementById("moreSeoContent");

    button.addEventListener("click", function () {

        const isHidden = content.hidden;

        content.hidden = !isHidden;

        button.textContent = isHidden ? "Read Less" : "Read More";

        button.setAttribute("aria-expanded", String(isHidden));

    });

});

		// seo content end

		// header start

		document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("tfMenuToggle");
  const nav = document.getElementById("tfNav");

  const dropdownBtn = document.getElementById("tfShopToggle");
  const dropdownMenu = document.getElementById("tfShopMenu");

  if (!menuBtn || !nav || !dropdownBtn || !dropdownMenu) return;

  // Mobile Menu
  menuBtn.addEventListener("click", function () {
    const isOpen = nav.classList.toggle("open");

    menuBtn.setAttribute("aria-expanded", String(isOpen));

    menuBtn.querySelector("i").className = isOpen
      ? "fa-solid fa-xmark"
      : "fa-solid fa-bars";
  });

  // Products Dropdown
  dropdownBtn.addEventListener("click", function () {
    const isOpen = dropdownMenu.classList.toggle("show");

    dropdownBtn.setAttribute("aria-expanded", String(isOpen));
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".tf-dropdown")) {
      dropdownMenu.classList.remove("show");
      dropdownBtn.setAttribute("aria-expanded", "false");
    }
  });

  // Escape Key
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      nav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.querySelector("i").className = "fa-solid fa-bars";

      dropdownMenu.classList.remove("show");
      dropdownBtn.setAttribute("aria-expanded", "false");
    }
  });
});


// header end