/**
 * =============================================
 * MAIN DOCUMENT READY FUNCTION
 * =============================================
 */
document.addEventListener("DOMContentLoaded", function() {
  // Initialize all functionality
  initModal();
  initCardSelection();
  initContactForm();
  initMobileNavigation();
});

/**
 * =============================================
 * MODAL FUNCTIONALITY
 * =============================================
 */
function initModal() {
  // Get modal elements
  const modal = document.getElementById("myModal");
  const mobileModal = document.getElementById("profileModal");
  const openModalBtn = document.getElementById("openModal");
  const closeModalBtn = document.getElementsByClassName("close")[0];

  // Open modal on profile click
  mobileModal.addEventListener("click", function() {
    modal.style.display = "block";
    document.body.classList.add("no-scroll");
  });

  // Open modal on profile hover (if needed)
  openModalBtn.onmouseover = function() {
    modal.style.display = "block";
    document.body.classList.add("no-scroll");
  };

  // Close modal when clicking X button
  closeModalBtn.onclick = function() {
    modal.style.display = "none";
    document.body.classList.remove("no-scroll");
  };

  // Close modal when clicking outside
  window.addEventListener("click", function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
      document.body.classList.remove("no-scroll");
    }
  });
}

/**
 * =============================================
 * CARD SELECTION FUNCTIONALITY
 * =============================================
 */
function initCardSelection() {
  // Select all cards
  const cards = document.querySelectorAll(".card");

  // Function to activate a card
  function activateCard(selectedCard) {
    // First remove 'active' from all cards
    cards.forEach((card) => {
      card.classList.remove("active");
    });

    // Then add 'active' to the selected card
    selectedCard.classList.add("active");
  }

  // Set middle card as active by default
  const middleIndex = Math.floor(cards.length / 2);
  if (cards.length > 0) {
    activateCard(cards[middleIndex]);
    console.log("Default active card index:", middleIndex);
  }

  // Add click event to each card
  cards.forEach((card) => {
    card.addEventListener("click", function() {
      activateCard(this);
    });
  });
}

/**
 * =============================================
 * CONTACT FORM FUNCTIONALITY
 * =============================================
 */
function initContactForm() {
  const form = document.getElementById("contactForm");
  const contactModal = document.getElementById("modal");
  const modalMessage = document.getElementById("modal-message");
  const confirmYes = document.getElementById("confirmYes");
  const confirmNo = document.getElementById("confirmNo");

  let formSubmitted = false;

  if (!form) return;

  form.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent actual form submission
    formSubmitted = true;
    modalMessage.textContent = "Are you sure you want to submit this?";
    contactModal.style.display = "flex";
    document.body.classList.add("no-scroll");
  });

  confirmYes.addEventListener("click", function() {
    if (formSubmitted) {
      modalMessage.textContent = "Thanks for reaching out to us!";
      confirmYes.style.display = "none";
      confirmNo.textContent = "Close";
      formSubmitted = false;

      // Reset the form after a brief delay
      setTimeout(() => {
        form.reset();
        contactModal.style.display = "none";
        document.body.classList.remove("no-scroll");
        confirmYes.style.display = "inline-block";
        confirmNo.textContent = "No";
      }, 2000);
    } else {
      contactModal.style.display = "none";
      document.body.classList.remove("no-scroll");
    }
  });

  confirmNo.addEventListener("click", function() {
    contactModal.style.display = "none";
    document.body.classList.remove("no-scroll");
    confirmYes.style.display = "inline-block";
    confirmNo.textContent = "No";
  });

  // Close modal when clicking outside
  window.addEventListener("click", function(event) {
    if (event.target === contactModal) {
      contactModal.style.display = "none";
      document.body.classList.remove("no-scroll");
    }
  });
}

/**
 * =============================================
 * MOBILE NAVIGATION FUNCTIONALITY
 * =============================================
 */
function initMobileNavigation() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileNavOverlay = document.getElementById('mobile-nav-overlay');

  if (!hamburgerBtn || !mobileNav || !mobileNavOverlay) return;

  hamburgerBtn.addEventListener('click', function() {
    // Toggle mobile nav
    mobileNav.classList.toggle('active');
    // Toggle overlay
    mobileNavOverlay.classList.toggle('active');
    // Toggle body scroll
    document.body.classList.toggle('no-scroll');
    // Toggle hamburger animation
    this.classList.toggle('active');
  });

  // Close mobile menu when clicking on overlay
  mobileNavOverlay.addEventListener('click', function() {
    mobileNav.classList.remove('active');
    this.classList.remove('active');
    document.body.classList.remove('no-scroll');
    hamburgerBtn.classList.remove('active');
  });

  // Close mobile menu when clicking on nav links
  const navLinks = document.querySelectorAll('.mobile-nav .nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('active');
      mobileNavOverlay.classList.remove('active');
      document.body.classList.remove('no-scroll');
      hamburgerBtn.classList.remove('active');
    });
  });
}