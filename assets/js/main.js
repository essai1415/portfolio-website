/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
}
showMenu('nav-toggle', 'nav-menu');

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        const navSelector = `.nav__menu a[href*=${sectionId}]`;
        const navItem = document.querySelector(navSelector);
        if (navItem) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navItem.classList.add('active');
            } else {
                navItem.classList.remove('active');
            }
        }
    });
}
window.addEventListener('scroll', scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    // reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 }); 
sr.reveal('.home__social-icon', { interval: 200 }); 
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });

/*===== ANIMATE SKILL BARS ON SCROLL =====*/
const skillsSection = document.getElementById('skills');
const skillDataBars = document.querySelectorAll('.skills__bar');
let skillAnimated = false;

function animateSkills() {
    const rect = skillsSection.getBoundingClientRect();
    if (!skillAnimated && rect.top < window.innerHeight - 100 && rect.bottom > 0) {
        skillDataBars.forEach(bar => {
            let widthClass = [...bar.classList].find(c => c.startsWith('skills__'));
            let targetWidth = '0%';
            switch (widthClass) {
                case 'skills__html': targetWidth = '95%'; break;
                case 'skills__css': targetWidth = '85%'; break;
                case 'skills__js': targetWidth = '65%'; break;
                case 'skills__ux': targetWidth = '85%'; break;
                case 'skills__py': targetWidth = '90%'; break;
                default: targetWidth = '50%';
            }
            bar.style.width = targetWidth;
        });
        skillAnimated = true;
    }
}
window.addEventListener('scroll', animateSkills);
// Optionally call on load in case section is already in view
animateSkills();
