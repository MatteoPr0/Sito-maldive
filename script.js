const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.12 }
);

reveals.forEach((item) => revealObserver.observe(item));

const tiltCards = document.querySelectorAll('.tilt-card');

const setTilt = (card, x, y) => {
  const rect = card.getBoundingClientRect();
  const dx = (x - rect.left) / rect.width - 0.5;
  const dy = (y - rect.top) / rect.height - 0.5;
  const tiltX = dy * -10;
  const tiltY = dx * 12;

  card.style.transform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`;
};

tiltCards.forEach((card) => {
  card.addEventListener('mousemove', (event) => setTilt(card, event.clientX, event.clientY));
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(700px) rotateX(0deg) rotateY(0deg) scale(1)';
  });

  card.addEventListener('touchstart', () => {
    card.style.transform = 'perspective(700px) rotateX(0deg) rotateY(0deg) scale(1.02)';
  }, { passive: true });

  card.addEventListener('touchend', () => {
    card.style.transform = 'perspective(700px) rotateX(0deg) rotateY(0deg) scale(1)';
  }, { passive: true });
});

const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
  if (!hero) return;
  const offset = window.scrollY * 0.15;
  hero.style.backgroundPositionY = `${offset}px`;
});
