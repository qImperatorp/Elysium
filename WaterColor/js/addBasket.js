//div в котором будут находиться товары
const basketItem = document.querySelector('.modal-item');

//Отследить клик на странице
window.addEventListener('click', function(event) {

    //Проверка был ли клик на кнопке "добавить в корзину"
    if(event.target.hasAttribute('data-basket')) {

        alert("Товар добавлен в корзину");

        //div в котором был совершен клик
        const product = event.target.closest('.categories__item')

        //Собираем данные с набора и записываем в обьект
        const productInfo = {
            id: product.dataset.id,
            imgSrc: product.querySelector('.categories__photo').getAttribute('src'),
            title: product.querySelector('.categories__name').innerText,
            cost: product.querySelector('.categories__cost').innerText,
            count: product.querySelector('[data-counter]').innerText,
        };

        //Проверка на наличие товара в корзине
        const itemInBasket = basketItem.querySelector(`[data-id="${productInfo.id}"]`);

        //Если товар есть в корзине
        if (itemInBasket) {
            const counterElement = itemInBasket.querySelector('[data-counter]');
            counterElement.textContent = parseInt(counterElement.textContent) + parseInt(productInfo.count);

        }

        //Если товара нету в корзине
        else {

            //Загрузка данных в шаблон корзины
            const productItemHTML = `<div class="categories__item" data-id="${productInfo.id}">
            <img class="categories__photo" src="${productInfo.imgSrc}" alt="">
            <div class="categories__name">${productInfo.title}</div>
            <div class="categories__cost">${productInfo.cost}</div>
            <div class="counter">
                <div class="items_control" data-action="minus">-</div>
                <div class="items_current" data-counter>${productInfo.count}</div>
                <div class="items_control" data-action="plus">+</div>
            </div>
            </div>`;

            //Отображение товара в корзине
            basketItem.insertAdjacentHTML('beforeend', productItemHTML);
        }

        //Сброс счетчика товара на "1"
        product.querySelector('[data-counter]').innerText = '1';

        //Отображение статуса корзины Пустая\неПустая
        toggleStatus ();

        //Пересчет общей стоимости товаров в корзине
        caltPrice ();
    }
});