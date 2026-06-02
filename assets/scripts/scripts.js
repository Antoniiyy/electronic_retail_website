// Чекаємо, поки весь HTML завантажиться
document.addEventListener('DOMContentLoaded', () => {
    
    // Знаходимо всі кнопки "Купити"
    const buyButtons = document.querySelectorAll('.btn-buy');
    
    // Знаходимо лічильник кошика
    const cartCountElement = document.getElementById('cartCount');
    
    // Змінна для зберігання кількості товарів у кошику
    let itemsInCart = 0;

    // Додаємо обробник події кліку на кожну кнопку "Купити"
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Збільшуємо кількість товарів
            itemsInCart++;
            
            // Оновлюємо цифру в кружечку над кошиком
            cartCountElement.textContent = itemsInCart;
            
            // Змінюємо текст кнопки для зворотного зв'язку користувачу
            const originalText = this.textContent;
            this.textContent = "У кошику!";
            this.style.backgroundColor = "#27ae60"; // Змінюємо колір на зелений
            
            // Повертаємо кнопку до початкового стану через 2 секунди
            setTimeout(() => {
                this.textContent = originalText;
                this.style.backgroundColor = ""; // Повертаємо колір з CSS
            }, 2000);
        });
    });

    // Обробник кліку на саму іконку кошика
    const cartButton = document.getElementById('cartButton');
    cartButton.addEventListener('click', () => {
        if (itemsInCart === 0) {
            alert("Ваш кошик наразі порожній.");
        } else {
            alert(`У вашому кошику товарів: ${itemsInCart}. Переходимо до оформлення замовлення!`);
        }
    });
});
