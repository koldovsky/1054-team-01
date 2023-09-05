document
  .querySelector(".confirm__window-button")
  .addEventListener("click", (event) => {
    event.preventDefault();
    const hiddenConfirm = document.querySelector(".hidden-confirm");
    hiddenConfirm.style.display = "none";
  });
