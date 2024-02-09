import { closeModal } from './modal.js'; // Импортируем функцию closeModal из модуля modal.js

export const submitForm = () => {
    // Получаем все формы с классом .feedback-form
    const forms = document.querySelectorAll('.feedback-form');
    
    // Для каждой формы добавляем обработчик события submit
    forms.forEach(form => {
        form.addEventListener('submit', async (event) => {
            event.preventDefault(); // Предотвращаем отправку формы по умолчанию
        
            const formData = new FormData(event.target); // Получаем данные из формы
        
            // Получаем кнопку отправки формы внутри текущей формы
            const submitButton = form.querySelector('.form-btn');
            
            // Сохраняем исходный текст кнопки
            const originalButtonText = submitButton.textContent;
            
            // Изменяем текст кнопки на "Зачекайте, йде відправка"
            submitButton.textContent = "Зачекайте, йде відправка";
            
            // Добавляем класс disabled к кнопке
            submitButton.classList.add('disabled');
            
            try {
                const response = await fetch('https://script.google.com/macros/s/AKfycbwyEFnrigJW_kACHkeF0Zqnc7bA-g1ZZE4oDUCsbIZ7FMhO62WhH76ZyHXKTeMyH0oTOA/exec', {
                    method: 'POST',
                    body: formData
                });
                if (response.ok) {
                    alert("Вашу форму відправлено! Наші менеджери незабаром зв'яжуться з вами.");
                    event.target.reset();
                    closeModal();
                } else {
                    throw new Error('Помилка при відправці форми');
                }
            } catch (error) {
                console.error('Сталася помилка:', error);
                alert('Сталася помилка при відправці форми. Будь ласка, спробуйте ще раз.');
            } finally {
                submitButton.textContent = originalButtonText;
                
                submitButton.classList.remove('disabled');
            }
        });
    });
}
