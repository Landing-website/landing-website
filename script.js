// Mobile menu toggle
function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

// Animate feature cards
const cards = document.querySelectorAll('.card');
function animateCards() {
  const triggerBottom = window.innerHeight * 0.85;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if(cardTop < triggerBottom){
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  });
}
window.addEventListener('scroll', animateCards);

// Form submission alert
const form = document.getElementById("signupForm");
form.addEventListener("submit", function(e){
  e.preventDefault();
  alert("Thank you! Your registration/order has been submitted.");
  form.reset();
});
