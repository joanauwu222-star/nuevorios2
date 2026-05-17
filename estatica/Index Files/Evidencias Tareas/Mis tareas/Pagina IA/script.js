document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    const exploreBtn = document.getElementById('exploreBtn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function() {
            const razasSection = document.getElementById('razas');
            if (razasSection) {
                razasSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const closeLightbox = document.querySelector('.close');

    const galleryItems = document.querySelectorAll('.galeria-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            if (img && lightbox && lightboxImg) {
                lightboxImg.src = img.src;
                lightbox.style.display = 'flex';
            }
        });
    });

    if (closeLightbox && lightbox) {
        closeLightbox.addEventListener('click', function() {
            lightbox.style.display = 'none';
        });
    }

    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
            }
        });
    }

    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const nombre = document.getElementById('nombre');
            const email = document.getElementById('email');
            const mensaje = document.getElementById('mensaje');
            
            let isValid = true;
            
            if (!nombre.value.trim()) {
                isValid = false;
                nombre.style.borderColor = '#e74c3c';
            } else {
                nombre.style.borderColor = '#cce7e7';
            }
            
            if (!email.value.trim()) {
                isValid = false;
                email.style.borderColor = '#e74c3c';
            } else {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(email.value)) {
                    isValid = false;
                    email.style.borderColor = '#e74c3c';
                } else {
                    email.style.borderColor = '#cce7e7';
                }
            }
            
            if (!mensaje.value.trim()) {
                isValid = false;
                mensaje.style.borderColor = '#e74c3c';
            } else {
                mensaje.style.borderColor = '#cce7e7';
            }
            
            if (isValid && formMessage) {
                formMessage.textContent = 'Mensaje enviado correctamente. Gracias por contactarnos.';
                formMessage.style.color = '#2c9e9e';
                contactForm.reset();
                setTimeout(() => {
                    if (formMessage) formMessage.textContent = '';
                }, 4000);
            } else if (formMessage) {
                formMessage.textContent = 'Por favor completa todos los campos correctamente.';
                formMessage.style.color = '#e74c3c';
            }
        });
    }

    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            }
        });
    });

    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (header) {
            if (window.scrollY > 50) {
                header.style.padding = '0.5rem 2rem';
                header.style.transition = 'all 0.3s ease';
            } else {
                header.style.padding = '1rem 2rem';
            }
        }
    });

    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
});