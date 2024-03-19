const cellNodes = document.querySelectorAll('[data-cell]');
const restartBtnNode = document.querySelector('[data-restart]');

let flag = true;

cellNodes.forEach(cell => {
    cell.addEventListener('click', () => {
        if (flag) {
            cell.innerHTML = 'X';
        } else {
            cell.innerHTML = 'O';
        }
        flag = !flag;
    });
});

/* Рестарт игры */
restartBtnNode.addEventListener('click', () => {
    cellNodes.forEach(cell => {
        cell.innerHTML = '';
        flag = !flag;
    })
});