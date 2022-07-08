//
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
});
//
function formatDate() {
    //* Ф-ция возвр. дату
    const date1 = new Date;
    const d = date1.getDate().toString().padStart(2, "0");
    const m = date1.getMonth() + 1;
    const y = date1.getFullYear().toString();
    return `${d}.${m.toString().padStart(2, "0")}.${y}`;
};
//
function formatTime() {
    //* Ф-ция возвр. время (hh:mm:ss)
    const d = new Date
    const hh = d.getHours().toString().padStart(2, "0");
    const mm = d.getMinutes().toString().padStart(2, "0");
    const ss = d.getSeconds().toString().padStart(2, "0");
    return `${hh}:${mm}:${ss}`;
};
// Дата
document.querySelector('.timerDate').innerHTML = formatDate();
//
setInterval(() => {
    document.querySelector('.timer').innerHTML = `${formatTime()}`
    //
}, 1000);
//