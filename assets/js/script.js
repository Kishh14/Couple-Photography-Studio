/**** IIFEs Have Been Used for Each Functionalities to Avoid Global Pollution ****/

// Hero Section Carousel
(function () {
    const currentSlideEl = document.getElementById('currentSlide');
    const nextBtnEl = document.querySelector('.carousel-control-next');
    const prevBtnEl = document.querySelector('.carousel-control-prev');

    nextBtnEl.addEventListener('click', () => {
        if (currentSlideEl.textContent < 3) {
            currentSlideEl.textContent = Number(currentSlideEl.textContent) + Number(1);
        } else {
            currentSlideEl.textContent = Number(1);
        }
    });

    prevBtnEl.addEventListener('click', () => {
        if (currentSlideEl.textContent > 1) {
            currentSlideEl.textContent = Number(currentSlideEl.textContent) - 1;
        } else {
            currentSlideEl.textContent = Number(3);
        }
    });
})();


// Navbar Visible On Scroll
(function () {
    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        const navEl = this.document.querySelector('nav');
        if (scrollPosition >= 0.4) {
            navEl.classList.remove('position-absolute')
            navEl.classList.add('position-fixed')
            navEl.classList.add('navbar-blur')
        } else if (scrollPosition === 0) {
            navEl.classList.add('position-absolute')
            navEl.classList.remove('position-fixed')
            navEl.classList.remove('navbar-blur')
        }
    });
})();


// Testimonial Section's Carousel
(function () {
    const testimonialLabelEl = document.querySelector('.testimonial-label');
    const tcCurrentSlideEl = document.getElementById('tc-currentSlide');
    const tcNextBtnEl = document.querySelector('#testimonialCarousel .carousel-control-next');
    const tcPrevBtnEl = document.querySelector('#testimonialCarousel .carousel-control-prev');

    tcNextBtnEl.addEventListener('click', () => {
        if (tcCurrentSlideEl.textContent < 3) {
            tcCurrentSlideEl.textContent = Number(tcCurrentSlideEl.textContent) + Number(1);
            testimonialLabelEl.textContent = `Testimonial ${tcCurrentSlideEl.textContent}`
        } else {
            tcCurrentSlideEl.textContent = Number(1);
            testimonialLabelEl.textContent = `Testimonial ${tcCurrentSlideEl.textContent}`
        }
    });

    tcPrevBtnEl.addEventListener('click', () => {
        if (tcCurrentSlideEl.textContent > 1) {
            tcCurrentSlideEl.textContent = Number(tcCurrentSlideEl.textContent) - 1;
            testimonialLabelEl.textContent = `Testimonial ${tcCurrentSlideEl.textContent}`
        } else {
            tcCurrentSlideEl.textContent = Number(3);
            testimonialLabelEl.textContent = `Testimonial ${tcCurrentSlideEl.textContent}`
        }
    });
})();


// Carousel Section
(function () {
    const cs_currentSlideEl = document.querySelector('#carouselSection #currentSlide');
    const cs_nextBtnEl = document.querySelector('#carouselSection .carousel-control-next');
    const cs_prevBtnEl = document.querySelector('#carouselSection .carousel-control-prev');

    cs_nextBtnEl.addEventListener('click', () => {
        if (cs_currentSlideEl.textContent < 3) {
            cs_currentSlideEl.textContent = Number(cs_currentSlideEl.textContent) + Number(1);
        } else {
            cs_currentSlideEl.textContent = Number(1);
        }
    });

    cs_prevBtnEl.addEventListener('click', () => {
        if (cs_currentSlideEl.textContent > 1) {
            cs_currentSlideEl.textContent = Number(cs_currentSlideEl.textContent) - 1;
        } else {
            cs_currentSlideEl.textContent = Number(3);
        }
    });
})();