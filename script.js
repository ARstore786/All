const modal = document.getElementById("orderModal");
const form = document.getElementById("orderForm");
const productSelect = document.getElementById("productSelect");
const quantity = document.getElementById("quantity");
const totalPrice = document.getElementById("totalPrice");
const formStatus = document.getElementById("formStatus");
const submitOrder = document.getElementById("submitOrder");
const hiddenReplyTo = document.getElementById("hiddenReplyTo");
const orderTime = document.getElementById("orderTime");

const PRICE = 1500;

function openModal(product = "Hot Shapers Waist Trainer") {
  productSelect.value = product;
  formStatus.textContent = "";
  formStatus.style.color = "";
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  updateTotal();
  setTimeout(() => document.getElementById("customerName").focus(), 150);
}

function closeModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function updateTotal() {
  const qty = Math.max(1, Math.min(20, Number(quantity.value) || 1));
  quantity.value = qty;
  const total = PRICE * qty;
  totalPrice.textContent = `Rs. ${total.toLocaleString("en-PK")}`;
  submitOrder.textContent = `Confirm Order • Rs. ${total.toLocaleString("en-PK")}`;
}

document.querySelectorAll(".order-btn").forEach(btn => {
  btn.addEventListener("click", () => openModal(btn.dataset.product));
});

document.getElementById("ctaOrder").addEventListener("click", () => openModal());
document.querySelector(".close-modal").addEventListener("click", closeModal);
document.querySelector(".modal-backdrop").addEventListener("click", closeModal);
quantity.addEventListener("input", updateTotal);

document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("open");
});
document.querySelectorAll(".nav-links a").forEach(a => {
  a.addEventListener("click", () => document.querySelector(".nav-links").classList.remove("open"));
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape" && modal.classList.contains("show")) closeModal();
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("customerEmail").value.trim();
  hiddenReplyTo.value = email || "alphasasb58@gmail.com";
  orderTime.value = new Date().toLocaleString("en-PK", { timeZone: "Asia/Karachi" });

  const qty = Number(quantity.value) || 1;
  const total = PRICE * qty;

  submitOrder.disabled = true;
  submitOrder.textContent = "Sending Order...";
  formStatus.textContent = "";

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { "Accept": "application/json" }
    });

    if (!response.ok) throw new Error("Order could not be sent.");

    formStatus.style.color = "#16794a";
    formStatus.textContent = "Order received! Your details have been sent to A&R Store.";
    submitOrder.textContent = "Order Sent ✓";

    form.reset();
    quantity.value = 1;
    updateTotal();

    setTimeout(() => {
      closeModal();
      submitOrder.disabled = false;
      submitOrder.textContent = "Confirm Order • Rs. 1,500";
    }, 1800);
  } catch (error) {
    formStatus.style.color = "#b42318";
    formStatus.textContent = "Order send nahi ho saka. Please try again or email alphasasb58@gmail.com.";
    submitOrder.disabled = false;
    submitOrder.textContent = `Confirm Order • Rs. ${total.toLocaleString("en-PK")}`;
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
updateTotal();
