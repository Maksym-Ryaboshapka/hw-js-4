const openBtn = document.querySelector("#modal-open");
const closeBtn = document.querySelector("#modal-close");
const backdrop = document.querySelector(".backdrop");

const openModal = (e) => {
  openBtn.removeEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);

  backdrop.classList.remove("is-hidden");
  document.body.classList.add("no-scroll");
};

const closeModal = (e) => {
  closeBtn.removeEventListener("click", closeModal);
  openBtn.addEventListener("click", openModal);

  backdrop.classList.add("is-hidden");
  document.body.classList.remove("no-scroll");
};

openBtn.addEventListener("click", openModal);
