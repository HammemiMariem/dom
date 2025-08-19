// Sélectionner les éléments
const plusBtns = document.querySelectorAll(".fa-plus-circle");
const minusBtns = document.querySelectorAll(".fa-minus-circle");
const trashBtns = document.querySelectorAll(".fa-trash-alt");
const heartBtns = document.querySelectorAll(".fa-heart");
const totalElement = document.querySelector(".total");

// Fonction pour recalculer le prix total
function updateTotal() {
  let total = 0;
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const unitPrice = parseFloat(
      card.querySelector(".unit-price").textContent.replace("$", "")
    );
    const quantity = parseInt(card.querySelector(".quantity").textContent);
    total += unitPrice * quantity;
  });

  totalElement.textContent = total + " $";
}

// Bouton ➕
plusBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let quantitySpan = btn.nextElementSibling;
    quantitySpan.textContent = parseInt(quantitySpan.textContent) + 1;
    updateTotal();
  });
});

// Bouton ➖
minusBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let quantitySpan = btn.previousElementSibling;
    let currentQuantity = parseInt(quantitySpan.textContent);
    if (currentQuantity > 0) {
      quantitySpan.textContent = currentQuantity - 1;
      updateTotal();
    }
  });
});

// Bouton 🗑️
trashBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let card = btn.closest(".card");
    card.remove();
    updateTotal();
  });
});

// Bouton ❤️
heartBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("liked");
  });
});
