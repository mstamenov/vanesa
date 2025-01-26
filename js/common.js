function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "flex"; // Показва модала
  }

  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none"; // Скрива модала
  }

  // Затваряне на модала при клик извън него
  window.onclick = function (event) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  };