// Typewriter effect for main heading
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  element.style.opacity = '1';
  
  // Check if mobile
  const isMobile = window.innerWidth <= 768;
  if (isMobile) {
    element.style.whiteSpace = 'normal';
    element.style.wordWrap = 'break-word';
  }
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      // Remove cursor after typing is complete
      setTimeout(() => {
        element.style.borderRight = 'none';
      }, 500);
    }
  }
  type();
}

// Initialize hero animations on page load
document.addEventListener('DOMContentLoaded', function() {
  const heading = document.querySelector('.hero-text h1');
  const buttons = document.querySelector('.hero-buttons');
  
  if (heading) {
    typeWriter(heading, 'Mad Jimmy Cleaning Services', 80);
  }
  
  // Show buttons container after animations start
  if (buttons) {
    setTimeout(() => {
      buttons.style.opacity = '1';
    }, 3000);
  }
});

function showCallOptions() {
  const callOptions = document.getElementById('call-options');
  callOptions.classList.toggle('hidden');
}

// Hide call options when clicking outside
document.addEventListener('click', function(event) {
  const callBtn = document.querySelector('.call-btn');
  const callOptions = document.getElementById('call-options');
  
  if (!callBtn.contains(event.target) && !callOptions.contains(event.target)) {
    callOptions.classList.add('hidden');
  }
});

// About Drawer toggle
const menuBtn = document.getElementById('menu-btn');
const aboutDrawer = document.getElementById('about-drawer');
const drawerOverlay = document.getElementById('drawer-overlay');
const drawerClose = document.getElementById('drawer-close');

function openDrawer() {
  if (aboutDrawer) {
    aboutDrawer.classList.remove('hidden');
    aboutDrawer.classList.add('open');
    aboutDrawer.setAttribute('aria-hidden', 'false');
  }
  if (drawerOverlay) drawerOverlay.classList.remove('hidden');
}

function closeDrawer() {
  if (aboutDrawer) {
    aboutDrawer.classList.remove('open');
    aboutDrawer.classList.add('hidden');
    aboutDrawer.setAttribute('aria-hidden', 'true');
  }
  if (drawerOverlay) drawerOverlay.classList.add('hidden');
}

if (menuBtn) menuBtn.addEventListener('click', function(e){ e.stopPropagation(); openDrawer(); });
if (drawerClose) drawerClose.addEventListener('click', function(){ closeDrawer(); });
if (drawerOverlay) drawerOverlay.addEventListener('click', function(){ closeDrawer(); });

// Close drawer on ESC
document.addEventListener('keydown', function(e){ if (e.key === 'Escape') closeDrawer(); });

// IntersectionObserver: animate services section when scrolled into view
document.addEventListener('DOMContentLoaded', function(){
  const servicesSection = document.querySelector('.services-section');
  if (!servicesSection) return;

  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        servicesSection.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  io.observe(servicesSection);
});