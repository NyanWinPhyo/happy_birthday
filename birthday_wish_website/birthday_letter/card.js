// CARD LIGHTBOX
const cardThumb     = document.getElementById('card-thumb');
const cardLightbox  = document.getElementById('card-lightbox');
const cardCloseBtn  = document.getElementById('card-close');

// Open modal on thumbnail click
cardThumb.addEventListener('click', () => {
  cardLightbox.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // optional: lock page scroll
});

// Close on × click
cardCloseBtn.addEventListener('click', () => {
  cardLightbox.classList.add('hidden');
  document.body.style.overflow = '';       // re-enable scroll
});

// Close if clicking outside the card
cardLightbox.addEventListener('click', e => {
  if (e.target === cardLightbox) {
    cardLightbox.classList.add('hidden');
    document.body.style.overflow = '';
  }
});
