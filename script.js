
// Smooth scroll to Test Series section
function scrollToTestSeries() {
  document.getElementById('test').scrollIntoView({
    behavior: 'smooth',
  });
}

// Show login page
function showLoginPage() {
  alert('Redirecting to the login page!');
}

// Graph Placeholder
const ctx = document.getElementById('analytics-graph').getContext('2d'); 
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
    datasets: [
      {
        label: 'Performance',
        data: [10, 15, 25, 35, 45],
        borderColor: '#007BFF',
        backgroundColor: 'rgba(0, 123, 255, 0.2)',
        borderWidth: 2,
        tension: 0.4, // Smooth curve
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          font: {
            size: 14,
          },
          color: 'black',
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: 'black',
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: 'black',
        },
      },
    },
  },
});

// Toggle the mobile menu
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// Dark Mode Toggle
let isDarkMode = false;

function toggleFunction() {
  const element = document.body;
  const button = document.getElementById("toggle");
  const modeImage = document.getElementById("mode-image");

  element.classList.toggle("dark-mode");

  if (isDarkMode) {
    button.style.backgroundColor = "rgb(248, 248, 248)";
    modeImage.src = "image/sun.png";
  } else {
    button.style.backgroundColor = "rgb(20,20,20)";
    modeImage.src = "image/moon.png";
  }
  isDarkMode = !isDarkMode;
}

// Preloader functionality with smooth animation
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  const mainContent = document.getElementById('home');

  // Prevent scrolling during the preloader phase
  document.body.style.overflow = 'hidden';

  // Simulate loading effect
  setTimeout(() => {
    preloader.style.opacity = '0'; // Smooth fade-out of preloader
    preloader.style.pointerEvents = 'none';

    // Reveal the main content
    mainContent.style.opacity = '1';
    mainContent.style.transition = 'opacity 1.5s ease-in-out';

    // Allow scrolling after the animation completes
    setTimeout(() => {
      document.body.style.overflow = 'auto';
    }, 1000); // Wait for the fade-in effect to finish
  }, 2800); // Wait 2.8 seconds before hiding preloader
});

// Animate home page title dynamically
document.addEventListener('DOMContentLoaded', () => {
  const promo = document.querySelector('.promo');

  if (promo) {
    let charIndex = 0;
    const text = promo.textContent;
    promo.textContent = '';

    // Gradually type out the promo text
    const typingEffect = setInterval(() => {
      promo.textContent += text[charIndex];
      charIndex++;

      if (charIndex === text.length) {
        clearInterval(typingEffect); // Stop when complete
      }
    }, 100); // Adjust typing speed (in ms) here
  }
});

// Initialize click as a global variable outside the function
let click = false;

function toggleFunction() {
  const body = document.body;
  body.classList.toggle("dark-mode");

  const toggleButton = document.getElementById("toggle");
  const modeImage = document.getElementById("mode-image");

  // Update styles for toggle button and mode icon
  if (click) {
    toggleButton.style.backgroundColor = "rgb(248, 248, 248)";
    modeImage.src = "image/sun.png";
  } else {
    toggleButton.style.backgroundColor = "rgb(20,20,20)";
    modeImage.src = "image/moon.png";
  }
  click = !click;
}
