window.onload = () => {
  const modal = document.querySelector(".confirm");
  modal.classList.remove("hidden-confirm");
};
document
  .querySelector(".confirm__window-button .button") // Виправлено селектор
  .addEventListener("click", () => {
    const modal = document.querySelector(".confirm");
    modal.classList.add("hidden-confirm");
  });
