// Scroll Smoothly to Sections
const links = document.querySelectorAll('.navbar a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 10,
                behavior: 'smooth',
            });
        }
    });
});

// Highlight Active Section in Navigation
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.content-section');
    const scrollPosition = window.pageYOffset;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (
            scrollPosition >= sectionTop - 50 &&
            scrollPosition < sectionTop + sectionHeight - 50
        ) {
            document.querySelector('.navbar a[href="#' + sectionId + '"]').classList.add('active');
        } else {
            document.querySelector('.navbar a[href="#' + sectionId + '"]').classList.remove('active');
        }
    });
});
