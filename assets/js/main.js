// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
});

// Slideshow functionality
class Slideshow {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.currentSlide = 0;
        this.slideInterval = null;
        
        if (this.slides.length > 0) {
            this.init();
        }
        // duration used by the slide fade (in ms) — keep in sync with CSS
        this.fadeDuration = 3000;
    }
    
    init() {
        // Start the slideshow
        this.startSlideshow();
        
        // Pause on hover
        const slideshowContainer = document.querySelector('.slideshow-container');
        if (slideshowContainer) {
            slideshowContainer.addEventListener('mouseenter', () => this.pauseSlideshow());
            slideshowContainer.addEventListener('mouseleave', () => this.startSlideshow());
        }
    }
    
    showSlide(index) {
        // Remove active class from all slides
        this.slides.forEach(slide => slide.classList.remove('active'));
        
        // Add active class to current slide
        if (this.slides[index]) {
            this.slides[index].classList.add('active');
        }
        // update the nav/hero strip to match the active slide image
        const img = this.slides[index] ? this.slides[index].querySelector('img') : null;
        if (img) {
            // if the image is already loaded use it, otherwise wait for load
            if (img.complete && img.naturalWidth > 0) {
                // crossfade the nav strip using the same slide fade duration
                crossfadeHeroStrip(img, this.fadeDuration);
            } else {
                img.addEventListener('load', () => crossfadeHeroStrip(img, this.fadeDuration), { once: true });
            }
        }
    }
    
    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.showSlide(this.currentSlide);
    }
    
    startSlideshow() {
        this.slideInterval = setInterval(() => {
            this.nextSlide();
        }, 6500); // Change slide every 6.5 seconds
    }
    
    pauseSlideshow() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
            this.slideInterval = null;
        }
    }
}

// Initialize slideshow when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new Slideshow();
    // measure and publish the real navbar height to CSS so the strip and slides line up
    updateNavbarHeight();
        // set up nav strip element used for crossfading (keeps the strip and hero in sync)
        ensureNavStripExists();

        // set initial hero strip for the currently active slide (if present)
    const activeImg = document.querySelector('.slide.active img');
    if (activeImg) {
        if (activeImg.complete && activeImg.naturalWidth > 0) {
            // write initial content directly to both layers (no animation)
            setHeroStripFromImage(activeImg, 0, true);
            setHeroStripFromImage(activeImg, 1, true);
        } else {
            activeImg.addEventListener('load', () => {
                setHeroStripFromImage(activeImg, 0, true);
                setHeroStripFromImage(activeImg, 1, true);
            }, { once: true });
        }
    }
});


/**
 * Create a 1px-tall repeating strip from the top row of the provided image
 * and store it in a CSS variable so the navbar overlay can repeat it vertically.
 */
function setHeroStripFromImage(img, targetLayer = null, skipTransition = false) {
    if (!img || !img.naturalWidth) return;

    try {
        // choose a render width; use the image's natural width or viewport width
        const renderWidth = Math.max(img.naturalWidth || 0, window.innerWidth || 0);
        const canvas = document.createElement('canvas');
        canvas.width = renderWidth;
        canvas.height = 1;
        const ctx = canvas.getContext('2d');

        // draw only the top 1px row of the source image
        // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
        ctx.drawImage(img, 0, 0, img.naturalWidth, 1, 0, 0, canvas.width, 1);

        const dataUrl = canvas.toDataURL('image/png');

        // if nav-strip exists, write to the requested layer or update CSS var as fallback
        const container = document.getElementById('nav-strip');
        if (container && typeof targetLayer === 'number') {
            const layers = container.querySelectorAll('.nav-strip__layer');
            const layer = layers[targetLayer % layers.length];
            if (skipTransition) layer.style.transition = 'none';
            layer.style.backgroundImage = `linear-gradient(var(--accent-secondary-900-10), var(--accent-secondary-900-10)), url("${dataUrl}")`;
            layer.style.backgroundRepeat = 'repeat-y';
            layer.style.backgroundSize = '100% 1px';
            layer.style.backgroundPosition = 'top center';
            if (skipTransition) setTimeout(() => { layer.style.transition = ''; }, 20);
        } else {
            // set CSS --hero-strip variable used by CSS ::before on body (fallback path)
            document.documentElement.style.setProperty('--hero-strip', `url("${dataUrl}")`);
        }

        // also keep a full hero image as a fallback variable
        document.documentElement.style.setProperty('--hero-image', `url("${img.src}")`);
    } catch (err) {
        // if canvas is blocked by CORS or other errors, fallback
        console.warn('setHeroStripFromImage failed:', err);
        document.documentElement.style.setProperty('--hero-strip', 'none');
    }
}

// regenerate the strip on resize (throttle for performance)
let _resizeTimer = null;
window.addEventListener('resize', function() {
    clearTimeout(_resizeTimer);
    _resizeTimer = setTimeout(() => {
        // keep the CSS variable up-to-date for responsive layouts
        updateNavbarHeight();

        const active = document.querySelector('.slide.active img');
        if (active && active.complete) {
            // update both layers to avoid visual glitch while resizing
            setHeroStripFromImage(active, 0, true);
            setHeroStripFromImage(active, 1, true);
        }
    }, 150);
});

// --- NAV STRIP CROSSFADE HELPERS --------------------------------------
function ensureNavStripExists() {
    if (document.getElementById('nav-strip')) return;

    const el = document.createElement('div');
    el.id = 'nav-strip';
    el.setAttribute('aria-hidden', 'true');
    el.className = 'nav-strip';

    // two layers for crossfading
    const layerA = document.createElement('div');
    layerA.className = 'nav-strip__layer nav-strip__layer--a';
    layerA.style.opacity = '1';

    const layerB = document.createElement('div');
    layerB.className = 'nav-strip__layer nav-strip__layer--b';
    layerB.style.opacity = '0';

    el.appendChild(layerA);
    el.appendChild(layerB);
    document.body.appendChild(el);
    // when JS drives the nav strip, hide the body::before fallback (keeps one mirror source)
    document.documentElement.classList.add('use-nav-strip');
}

function crossfadeHeroStrip(img, durationMs) {
    if (!img) return;
    ensureNavStripExists();

    const container = document.getElementById('nav-strip');
    const [a, b] = container.querySelectorAll('.nav-strip__layer');
    const current = parseFloat(window.getComputedStyle(a).opacity) > 0.5 ? a : b;
    const next = current === a ? b : a;

    a.style.transition = `opacity ${durationMs}ms ease-in-out`;
    b.style.transition = `opacity ${durationMs}ms ease-in-out`;

    try {
        const canvas = document.createElement('canvas');
        const renderWidth = Math.max(img.naturalWidth || 0, window.innerWidth || 0);
        canvas.width = renderWidth;
        canvas.height = 1;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, img.naturalWidth, 1, 0, 0, canvas.width, 1);
        const dataUrl = canvas.toDataURL('image/png');

        next.style.backgroundImage = `linear-gradient(var(--accent-secondary-900-10), var(--accent-secondary-900-10)), url("${dataUrl}")`;
        next.style.backgroundRepeat = 'repeat-y';
        next.style.backgroundSize = '100% 1px';
        next.style.backgroundPosition = 'top center';

        // force reflow then toggle opacity
        // eslint-disable-next-line no-unused-expressions
        next.offsetHeight;
        next.style.opacity = '1';
        current.style.opacity = '0';

        setTimeout(() => {
            current.style.backgroundImage = '';
        }, durationMs + 50);
    } catch (err) {
        // fallback: full image
        next.style.backgroundImage = `linear-gradient(var(--accent-secondary-900-10), var(--accent-secondary-900-10)), url("${img.src}")`;
        next.style.backgroundRepeat = 'no-repeat';
        next.style.backgroundSize = 'cover';
        next.style.backgroundPosition = 'top center';
        next.style.opacity = '1';
        current.style.opacity = '0';
        setTimeout(() => { current.style.backgroundImage = ''; }, durationMs + 50);
    }
}

/**
 * Reads the navbar element's current height and writes it to the root CSS variable
 * so the CSS uses the real value instead of a hardcoded 80px.
 */
function updateNavbarHeight() {
    const navbar = document.querySelector('.navbar');
    let h = 80; // default fallback
    if (navbar) {
        // prefer clientHeight which excludes borders/scroll
        h = navbar.clientHeight || navbar.offsetHeight || h;
    }
    document.documentElement.style.setProperty('--navbar-height', `${h}px`);
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add scroll effect to navigation and handle inner pages vs home page
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const heroSection = document.querySelector('.hero-section');
    const body = document.body;
    
    // Check if we're on an inner page (not homepage)
    if (!heroSection) {
        body.classList.add('inner-page');
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    // Handle scroll events
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            // Only remove scrolled class if not on inner page
            if (heroSection) {
                navbar.classList.remove('scrolled');
                navbar.style.background = 'rgba(255, 255, 255, 0.1)';
                navbar.style.boxShadow = 'none';
            }
        }
    });
    
    // Trigger scroll event once to set initial state
    window.dispatchEvent(new Event('scroll'));
});