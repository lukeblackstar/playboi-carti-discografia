window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        const musicPlayer = document.getElementById('musicPlayer');
        musicPlayer.classList.add('show');
    }, 2000);
});

const albumCards = document.querySelectorAll('.album-card');
albumCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
    
    card.addEventListener('click', () => {
        const musicPlayer = document.getElementById('musicPlayer');
        musicPlayer.classList.add('show');
        
        const trackName = card.querySelector('.album-title').textContent;
        document.querySelector('.track-name').textContent = trackName;
    });
});

window.addEventListener('scroll', function() {
    const parallaxSections = document.querySelectorAll('.parallax-section');
    parallaxSections.forEach(section => {
        const scrollPosition = window.pageYOffset;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition > sectionTop - window.innerHeight && 
            scrollPosition < sectionTop + sectionHeight) {
            const yPos = -(scrollPosition - sectionTop) / 5;
            section.style.backgroundPosition = `center ${yPos}px`;
        }
    });
});

const timelineItems = document.querySelectorAll('.timeline-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

timelineItems.forEach(item => {
    item.style.opacity = 0;
    item.style.transform = 'translateY(50px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(item);
});