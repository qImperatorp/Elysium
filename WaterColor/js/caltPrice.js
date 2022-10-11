function caltPrice () {
    const basketWindow = document.querySelector('.modal-item');
    const modalItems = basketWindow.querySelectorAll('.categories__item');
    const finishCost = document.querySelector('.finish-cost');

    let totalPrice = 0;

    //Перебираем все наборы в корзине
    modalItems.forEach(function (item) {

        const amountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.categories__cost');
        const currentPrice = parseInt(amountEl.textContent) * parseInt(priceEl.textContent);

        //Добавление цены к итоговой
        totalPrice += currentPrice;
    });

    //Отображение итоговой цены на странице
    finishCost.innerText = totalPrice;
}