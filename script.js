 document.addEventListener('mousemove', (e) => {
    const layers = document.querySelectorAll('.parallax-layer');
    layers.forEach((layer, index) => {
      const speed = (index + 1) * 0.5; // adjust speed per layer
      const x = (window.innerWidth - e.pageX * speed) / 100;
      const y = (window.innerHeight - e.pageY * speed) / 100;
      layer.style.transform = translate(${x}px, ${y}px);
    });
  });


const secScroll = document.querySelector('.sec-scroll');
  const cards = document.querySelectorAll('.pricecard');
  let index = 0;
  let scrolling = false;

  function showCard(i) {
    cards.forEach((card, j) => {
      if (j === i) {
        card.classList.add('active');
        card.classList.remove('hidden');
      } else {
        card.classList.remove('active');
        card.classList.add('hidden');
      }
    });
  }

  function nextCard() {
    if (index < cards.length - 1) {
      index++;
      showCard(index);
    }
  }

  function prevCard() {
    if (index > 0) {
      index--;
      showCard(index);
    }
  }

  // Wheel event ONLY on .sec-scroll, prevent page scroll
  secScroll.addEventListener('wheel', (e) => {
    e.preventDefault(); // IMPORTANT: prevent page scroll!

    if (scrolling) return;
    scrolling = true;

    if (e.deltaY > 0) {
      nextCard();
    } else {
      prevCard();
    }

    setTimeout(() => scrolling = false, 1500);
  }, { passive: false }); // passive:false required to call preventDefault()

  // Optional: Keyboard navigation on whole window
  window.addEventListener('keydown', (e) => {
    if (scrolling) return;

    if (e.key === 'ArrowDown') {
      nextCard();
      scrolling = true;
    } else if (e.key === 'ArrowUp') {
      prevCard();
      scrolling = true;
    }

    setTimeout(() => scrolling = false, 1500);
  });