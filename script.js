// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = '#fff';
            navLinks.style.padding = '20px';
            navLinks.style.boxShadow = '0 10px 10px rgba(0,0,0,0.1)';
            
            const links = navLinks.querySelectorAll('li');
            links.forEach(li => {
                li.style.margin = '10px 0';
                li.style.textAlign = 'center';
                li.style.marginLeft = '0';
            });
        }
    });
}

// Form Submission & WhatsApp Integration
const bookingForm = document.getElementById('bookingForm');

if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value;
        
        // Clinic Phone Number
        const clinicPhone = "919136970037";
        
        // Construct WhatsApp message
        const whatsappText = `*New Appointment Booking*%0A%0A` +
            `*Patient Name:* ${name}%0A` +
            `*Phone:* ${phone}%0A` +
            `*Preferred Date:* ${date}%0A` +
            `*Preferred Time:* ${time}%0A` +
            `*Service:* ${service}%0A` +
            `*Message:* ${message}`;
            
        // Open WhatsApp
        const whatsappUrl = `https://wa.me/${clinicPhone}?text=${whatsappText}`;
        window.open(whatsappUrl, '_blank');
        
        // Reset form
        bookingForm.reset();
        alert('Thank you! Redirecting to WhatsApp to confirm your booking.');
    });
}

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
            }
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.padding = '20px 0';
        navbar.style.background = '#fff';
        navbar.style.backdropFilter = 'none';
    }
});
