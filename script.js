// Assemble the email address at runtime to keep it away from simple scrapers.
const emailLink = document.getElementById("email-link");
if (emailLink) {
  const address = `${emailLink.dataset.user}@${emailLink.dataset.domain}`;
  emailLink.href = `mailto:${address}`;
  emailLink.textContent = address;
}

document.getElementById("year").textContent = new Date().getFullYear();

// Fade sections in as they scroll into view.
const revealTargets = document.querySelectorAll(".skill, .timeline__item, .cert");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }
  }, { rootMargin: "0px 0px -40px 0px" });
  revealTargets.forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });
}

// Highlight the nav link for the section currently in view.
const navLinks = [...document.querySelectorAll(".nav__links a")];
const sections = navLinks.map((a) => document.querySelector(a.getAttribute("href")));
window.addEventListener("scroll", () => {
  const y = window.scrollY + 120;
  let current = -1;
  sections.forEach((s, i) => { if (s && s.offsetTop <= y) current = i; });
  navLinks.forEach((a, i) => a.classList.toggle("is-active", i === current));
}, { passive: true });
