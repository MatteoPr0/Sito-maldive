const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach((item) => observer.observe(item));

const metricNodes = document.querySelectorAll('.metric');
let metricsAnimated = false;

const animateMetric = (node) => {
  const target = Number(node.dataset.target || 0);
  const duration = 1200;
  const startAt = performance.now();

  const loop = (now) => {
    const progress = Math.min((now - startAt) / duration, 1);
    const value = Math.floor(progress * target);
    node.textContent = value;
    if (progress < 1) requestAnimationFrame(loop);
  };

  requestAnimationFrame(loop);
};

const hero = document.querySelector('.hero');
const heroObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !metricsAnimated) {
        metricsAnimated = true;
        metricNodes.forEach(animateMetric);
      }
    });
  },
  { threshold: 0.45 }
);

if (hero) heroObserver.observe(hero);
