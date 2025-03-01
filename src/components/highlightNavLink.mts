import { sections, navLinks } from "./Header.astro.0.mts";

export function highlightNavLink() {
const scrollPosition = window.scrollY;

sections.forEach(section => {
const sectionTop = section.offsetTop - 100;
const sectionHeight = section.offsetHeight;
const sectionId = section.getAttribute('id');

if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
navLinks.forEach(link => {
link.classList.remove('text-primary-light', 'dark:text-primary-dark');
if (link.getAttribute('href') === `#${sectionId}`) {
link.classList.add('text-primary-light', 'dark:text-primary-dark');
}
});
}
});
}
