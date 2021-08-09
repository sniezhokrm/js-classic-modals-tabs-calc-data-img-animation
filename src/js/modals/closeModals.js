
const closeModals = (modalSelector) => {
  const modal = document.querySelector(modalSelector),
    windows = document.querySelectorAll("[data-model]");

    modal.style.display = "none";
    document.body.style.overflow = "";
    windows.forEach((item) => {
      item.style.display = "none";
    });

}
export default closeModals;
