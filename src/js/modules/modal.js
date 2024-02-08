export const myModal = () => {
    const connectButtons = document.querySelectorAll(".connect-btn");
    const modal = document.querySelector(".modal");
    const body = document.querySelector("body"); // Получаем элемент body
    const modalBody = document.querySelector(".modal__body"); // Получаем элемент modalBody

    const closeButton = document.querySelector(".modal__close");
  
    function openModal(event) {
        event.stopPropagation(); // Предотвращаем всплытие события клика
        modal.style.display = "block";
        body.classList.add("active"); // Добавляем класс для запрета прокрутки
        document.addEventListener("keydown", handleEscapeKey);
        document.addEventListener("click", handleClickOutsideModal); // Добавляем обработчик клика за пределами модалки
      }
     function closeModal() {
        modal.style.display = "none";
        body.classList.remove("active"); // Удаляем класс для восстановления прокрутки
        document.removeEventListener("keydown", handleEscapeKey);
        document.removeEventListener("click", handleClickOutsideModal); // Удаляем обработчик клика за пределами модалки
      }
  
    function handleEscapeKey(event) {
      if (event.key === "Escape") {
        closeModal();
      }
    }
    
    function handleClickOutsideModal(event) {
      if (!modalBody.contains(event.target) && event.target !== connectButtons[0]) { // Проверяем, что клик был вне модалки и не на кнопке открытия модалки
        closeModal();
      }
    }
  
    connectButtons.forEach((button) => {
      button.addEventListener("click", openModal);
    });
  
    closeButton.addEventListener("click", closeModal);
};

export const closeModal = () => {
    const modal = document.querySelector(".modal");
    const body = document.querySelector("body");
    const connectButtons = document.querySelectorAll(".connect-btn");
    const modalBody = document.querySelector(".modal__body");

    // Скрываем модальное окно
    modal.style.display = "none";

    // Удаляем класс для восстановления прокрутки
    body.classList.remove("active");

    // Удаляем обработчики событий
    document.removeEventListener("keydown", handleEscapeKey);
    document.removeEventListener("click", handleClickOutsideModal);

    function handleEscapeKey(event) {
        if (event.key === "Escape") {
            closeModal();
        }
    }

    function handleClickOutsideModal(event) {
        if (!modalBody.contains(event.target) && event.target !== connectButtons[0]) { // Проверяем, что клик был вне модалки и не на кнопке открытия модалки
            closeModal();
        }
    }
};

