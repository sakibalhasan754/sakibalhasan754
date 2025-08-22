// Dark mode toggle
const toggle = document.getElementById('modeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form (demo)
const form = document.getElementById('contactForm');
const msg = document.getElementById('formMsg');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  msg.textContent = "Thanks for your message! (Demo only)";
  msg.style.color = "green";
  form.reset();
});
