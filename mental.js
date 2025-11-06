// Menú Mental / Abstracto — Efecto de atracción al mouse
const menu = document.getElementById('mentalMenu');
const links = menu.querySelectorAll('a');

document.addEventListener('mousemove', (e) => {
  const { innerWidth, innerHeight } = window;
  const x = (e.clientX / innerWidth - 0.5) * 2;  // rango -1 a 1
  const y = (e.clientY / innerHeight - 0.5) * 2;

  links.forEach((link, i) => {
    const speed = 20 + i * 5;
    link.style.transform = `translate(${x * speed}px, ${y * speed}px) rotate(${x * 10}deg)`;
  });
});

document.addEventListener('mouseleave', () => {
  links.forEach((link) => {
    link.style.transform = 'translate(0, 0)';
  });
});
