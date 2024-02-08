export const openProgram = () => {
  const openBtns = document.querySelectorAll(".open-btn");
  openBtns.forEach((button) => {
    button.addEventListener("click", () => {
      const lessonContainer = button.closest(".program-section__lessons");

      if (lessonContainer) {
        const lessonContent = lessonContainer.querySelector(
          ".program-section__lesson-content"
        );
        const lessonNumber = lessonContainer.querySelector(
          ".lesson-block-number"
        );

        const isActive = lessonContent.classList.contains("active");

        if (isActive) {
          lessonContent.classList.remove("active");
          button.innerHTML = `
            <svg class="">
              <use xlink:href="#open"></use>
            </svg>
          `;
          lessonNumber.style.backgroundColor = "";
        } else {
          lessonContent.classList.add("active");
          button.innerHTML = `
            <svg class="">
              <use xlink:href="#close-list"></use>
            </svg>
          `;
          lessonNumber.style.backgroundColor = "#0A0A0A";
        }
      }
    });
  });
};