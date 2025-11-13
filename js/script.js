// js/script.js - Sprint1 Sub-A start
document.addEventListener('DOMContentLoaded', () => {
  // Set current year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Console confirm
  console.log('Project scaffold loaded — Sprint1 Sub-A');

  // Mobile nav toggle behavior (Bootstrap bundle handles collapse but this ensures toggler aria)
  const toggler = document.querySelector('.navbar-toggler');
  const collapseEl = document.getElementById('mainNav');
  if (toggler && collapseEl) {
    toggler.addEventListener('click', () => {
      const isExpanded = toggler.getAttribute('aria-expanded') === 'true';
      toggler.setAttribute('aria-expanded', (!isExpanded).toString());
    });
  }

  // Basic contact form handling (client-only for now)
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (ev) => {
      ev.preventDefault();
      // Simple client-side check
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const msg = form.message.value.trim();
      const feedback = document.getElementById('formFeedback');

      if (!name || !email || !msg) {
        feedback.textContent = 'Please fill in all fields.';
        feedback.style.color = 'crimson';
        return;
      }
      feedback.textContent = 'Thanks — your message is ready to be sent (no backend in this stage).';
      feedback.style.color = 'green';
      form.reset();
    });
  }
});
