const quotes = [
  "Welcome to our secret moonlit garden of love... 🌙✨",
  "Every love has its orbit. Yours begins here.",
  "This garden only blossoms when you're here.",
  "Under the moon’s gaze, our hearts whisper.",
  "You found the hidden galaxy meant only for us."
];

window.addEventListener('DOMContentLoaded', () => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  const quoteEl = document.getElementById("typed-quote");
  quoteEl.textContent = quote;

  // Show password and hide welcome quote after 3 seconds
  setTimeout(() => {
    document.getElementById("passwordContent").style.display = "block";
    document.getElementById("welcome-quote-container").style.display = "none";
    document.getElementById("password").focus();
  }, 5000);
});




window.addEventListener('scroll', () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      card.classList.add('reveal');
    }
  });
});


let showPassword = false;

function togglePasswordVisibility() {
  const input = document.getElementById("password");
  const icon = document.querySelector(".eye-icon");
  
  showPassword = !showPassword;
  input.type = showPassword ? "text" : "password";
  icon.textContent = showPassword ? "🙈" : "👁️";
}



// Existing code here ...

// Toggle layout button logic
const toggleBtn = document.getElementById('toggle-layout-btn');
const cardGrid = document.getElementById('card-container');

toggleBtn.addEventListener('click', () => {
  const isList = cardGrid.classList.toggle('list');
  if (isList) {
    toggleBtn.textContent = 'Switch to Grid View';
  } else {
    toggleBtn.textContent = 'Switch to List View';
  }
});

// Animated gradient background following touch
const container = document.querySelector('.container');

let lastX = 50, lastY = 50; // percentage values for background position
const maxShift = 20; // max percentage shift for gradient

function updateGradientPosition(xPercent, yPercent) {
  // Clamp values between 50 ± maxShift
  const posX = 50 + (xPercent - 50) * (maxShift / 50);
  const posY = 50 + (yPercent - 50) * (maxShift / 50);
  container.style.backgroundPosition = `${posX}% ${posY}%`;
}

if ('ontouchstart' in window) {
  window.addEventListener('touchmove', e => {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      // Calculate position relative to viewport
      const xPercent = (touch.clientX / window.innerWidth) * 100;
      const yPercent = (touch.clientY / window.innerHeight) * 100;
      updateGradientPosition(xPercent, yPercent);
    }
  });

  window.addEventListener('touchend', () => {
    // Return to center gradually after touch ends
    container.style.transition = 'background-position 1.5s ease';
    container.style.backgroundPosition = '50% 50%';
    setTimeout(() => {
      container.style.transition = '';
    }, 1500);
  });
}

// Reveal cards on scroll (existing)
window.addEventListener('scroll', () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      card.classList.add('reveal');
    }
  });
});



// Password check
let attemptCount = 0;

function checkPassword() {
    const input = document.getElementById("password").value.trim();
    const correct = "Premii"; 
    const closeGuesses = ["premii", "Premi", "premi", "pre"]; 
    const wrongNameGuess = ["Lopa", "lopa", "Lopai", "lopai", "Elara", "elara", "Elara Valor", "elara valor"];

    const errorEl = document.getElementById("password-error");
    const lockEl = document.getElementById("lock-animation");

    if (input === correct) 
    {
        document.getElementById("password-modal").style.display = "none";
        document.getElementById("main-content").style.display = "block";
        typeWriter();
    } 
    else if (closeGuesses.includes(input)) 
    {
        errorEl.textContent = "You're almost there... think how I say it ❤️";
        attemptCount++;
    } 
    else if (wrongNameGuess.includes(input)) 
    {
        errorEl.textContent = "That's not, but I love you for trying!";
        attemptCount++;
    }
    else if (attemptCount >= 3) 
    {
        lockEl.classList.remove("hidden");
        errorEl.textContent = "Locked? Not really... just feel it with your heart.";
    }
    else 
    {
        attemptCount++;
        errorEl.textContent = "Incorrect. Try again.";
        lockEl.classList.remove("hidden");

        if (attemptCount >= 3) 
        {
            lockEl.classList.remove("hidden");
            errorEl.textContent = "Locked? Not really... just feel it with your heart.";
        }

        setTimeout(() => {
        lockEl.classList.add("hidden");
        }, 800);
    }
}


// Typewriter Effect
const typeText = "Some Things Bloom Best in Private";
let i = 0;
function typeWriter() {
  if (i < typeText.length) {
    document.getElementById("typewriter").innerHTML += typeText.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}

// Modal functions
function showModal(title, message) {
  document.getElementById('modal-title').innerText = title;
  document.getElementById('modal-message').innerText = message;
  document.getElementById('modal').style.display = 'flex';
}
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}


// Mobile Scroll Animation using Intersection Observer
if (window.innerWidth <= 768) {
  const cards = document.querySelectorAll('.card');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-on-scroll');
        }
      });
    },
    {
      threshold: 0.2
    }
  );

  cards.forEach((card) => observer.observe(card));
}
