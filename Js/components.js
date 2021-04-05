// console.log("Connected");

// const alertboxes = document.querySelectorAll(".alert");
const modal = document.querySelector(".modal");
const toast = document.querySelector(".toast");
const cardDismiss = document.querySelector(".card-dismiss");
const btnCopy = document.querySelector(".btn-copy");

const closeCard = () => {
  cardDismiss.style.display = "none";
};

const dismissBtn = document
  .querySelector(".dismiss-btn")
  .addEventListener("click", closeCard);

const closeModal = () => {
  modal.style.display = "none";
};

const modalBtn = document
  .querySelector(".modal-btn")
  .addEventListener("click", closeModal);

const closeToast = () => {
  toast.style.display = "none";
};

const toastBtn = document
  .querySelector(".toast-btn")
  .addEventListener("click", closeToast);

const closeAlert = (alertBox) => {
  alertBox.style.display = "none";
};

const alertBtn = document
  .querySelector(".alert-btn")
  .addEventListener("click", closeAlert);

const alertbuttons = document.querySelectorAll(".alert-btn");

alertbuttons.forEach((element) => {
  const alertBox = element.parentElement;
  element.addEventListener("click", () => closeAlert(alertBox));
});
