function toggleStatus () {

    const basketWrapper = document.querySelector('.modal-item');
    const basketEmpty = document.querySelector('[data-basket-empty]');
    const oplata = document.querySelector('#oplata');
    const windowText = document.querySelector('#windowText')

    if (basketWrapper.children.length > 0) {
        oplata.classList.remove('none');
        windowText.classList.remove('none');
        basketEmpty.classList.add('none');
    } else {
        oplata.classList.add('none');
        windowText.classList.add('none');
        basketEmpty.classList.remove('none');
    }
}