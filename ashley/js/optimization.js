// Performance Optimizations
document.addEventListener('DOMContentLoaded', function() {
    // Optimize scroll performance
    let ticking = false;
    let lastKnownScrollPosition = 0;
    
    // Debounce scroll events
    document.addEventListener('scroll', function(e) {
        lastKnownScrollPosition = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(function() {
                // Handle scroll animations more efficiently
                ticking = false;
            });
            ticking = true;
        }
    });

    // Optimize GSAP animations
    if (typeof gsap !== 'undefined') {
        gsap.config({
            autoSleep: 60,
            force3D: false,
            nullTargetWarn: false
        });
    }

    // Lazy load images that are off screen
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));

    // Optimize Swiper initialization
    if (typeof Swiper !== 'undefined') {
        const swiperOptions = {
            speed: 1000,
            observer: true,
            observeParents: true,
            parallax: true,
            mousewheel: false,
            preloadImages: false,
            lazy: true,
            loop: true,
            slidesPerView: 'auto',
            spaceBetween: 40,
            centeredSlides: true,
            grabCursor: true,
            breakpoints: {
                1200: {
                    slidesPerView: 4,
                },
                992: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 2,
                },
            },
        };

        new Swiper('.mil-infinite-show', swiperOptions);
    }
}); 