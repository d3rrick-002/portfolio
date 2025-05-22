// Get the modal and button elements
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("close")[0];
const card = document.getElementById("card");

// When the user clicks the button, open the modal
btn.onmouseover = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onmouseover = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
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
  activateCard(cards[middleIndex]);
  console.log("middle index", middleIndex);

  // Add click event to each card
  cards.forEach((card) => {
    card.addEventListener("click", function () {
      activateCard(this);
    });
  });
});


const form = document.getElementById("contactForm");
const contactModal = document.getElementById("modal");
const modalMessage = document.getElementById("modal-message");
const confirmYes = document.getElementById("confirmYes");
const confirmNo = document.getElementById("confirmNo");

let formSubmitted = false;

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent actual form submission
  formSubmitted = true;
  modalMessage.textContent = "Are you sure you want to submit this?";
  contactModal.style.display = "flex";
});

confirmYes.addEventListener("click", function () {
  if (formSubmitted) {
    modalMessage.textContent = "Thanks for reaching us!";
    confirmYes.style.display = "none";
    confirmNo.textContent = "Close";
    formSubmitted = false;

    // Optionally reset the form after a brief delay
    setTimeout(() => {
      form.reset();
    }, 1000);
  } else {
    contactModal.style.display = "none";
  }
});

confirmNo.addEventListener("click", function () {
  contactModal.style.display = "none";
  confirmYes.style.display = "inline-block";
  confirmNo.textContent = "No";
});

// Optional: close modal when clicking outside
window.onclick = function (event) {
  if (event.target === contactModal) {
    contactModal.style.display = "none";
  }
};

const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
