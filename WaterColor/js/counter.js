// Добавляем прослушку на всём окне
window.addEventListener('click', function(event){

    let counter;

    //Проверка клика по кнопкам плюс или минус
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){
        //Находим div c счётчиком
        const divCounter = event.target.closest('.counter');
        //Находим div c число
        counter = divCounter.querySelector('[data-counter]');
    }

    //Проверка являеться ли элемент кнопкой плюс
    if (event.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText;
    }

    //Проверка являеться ли элемент кнопкой минус
    if (event.target.dataset.action === 'minus') {

        //Проверка чтобы счетчик был больше 1
        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;
        } 

        //Проверка на товар который находиться в корзине
        else if (event.target.closest('.modal-window') && parseInt(counter.innerText) === 1){
 
            //Удаление товара з корзины
            event.target.closest('.categories__item').remove();

            //Отображение статуса корзины Пустая\неПустая
            toggleStatus ()

            //Пересчет общей стоимости товаров в корзине
            caltPrice ();
        }
            
    }

    //Проверка на клик +\- внутри корзины
    if (event.target.hasAttribute('data-action') && event.target.closest('.modal-window')) {

        //Пересчет общей стоимости товаров в корзине
        caltPrice ();
    }
    
});