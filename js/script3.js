const hero = document.getElementById('mascot');
window.addEventListener('scroll', () => {
    const scrollOffset = window.scrollY;
    hero.style.backgroundPositionY = `${scrollOffset * 0.7}px`;
});
