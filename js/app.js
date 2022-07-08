/* */
let buttons = document.querySelectorAll('.btn');
//console.log(buttons)
buttons.forEach(button => {
    button.addEventListener('click', () => {
        let modal = document.querySelector('.modal') // получаем модальное окно (div) 
        modal.style.display = "block" // изменяем состояние на block(блочный элемент)
        //
        let modalContent = document.querySelector('.modal_content') //получаем контентную часть
        modalContent.innerHTML = `${button.parentNode.parentNode.childNodes[1].innerHTML}<br>
                                  ${button.innerHTML}`
        //
        window.onclick = function (event) { // клик, кроме контентного окна.
            //console.log(event) 
            if (event.target == modal) { // если клик по модальному окну (div .modal)
                modal.style.display = "none" // убираем контентное окно и изменяем состояние модального окна на "none"
            }
        }
    })
})