import { Popover } from "../components/popover/popover";

window.addEventListener('DOMContentLoaded', () => {

    const btn = document.querySelectorAll('.btn_danger');
    const allPopovers  = []

    btn.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            let popover = new Popover('.popover', e.target);
            let popover_id = performance.now().toFixed()
            if (!item.getAttribute('popover_id')) {
                item.setAttribute('popover_id', popover_id);
            }
            let current = allPopovers.find((elem) => elem.btnId  == item.getAttribute('popover_id'))
            if (current) {
                popover.removePopover()
            }
            else {

                allPopovers.push({
                    id: performance.now().toFixed(),
                    btnId: popover_id,
                    popover: popover
                });
                popover.createPopover(e.target);

            }
            // createTooltip(e.target)
        })
    });

    function createTooltip(element) {
        let popoverMain = document.createElement('div');
        let popoverHeader = document.createElement('h3');
        let popoverBody = document.createElement('div');
        let arrow = document.createElement('div');
        const { left, top} = element.getBoundingClientRect();

        popoverMain.classList.add('popover');
        popoverHeader.classList.add('popover-header');
        popoverBody.classList.add('popover-body');
        arrow.classList.add('arrow');
        popoverHeader.textContent = 'Popover title';
        popoverBody.textContent = 'And here s some amazing content. It s very engaging. Right?';

        popoverMain.appendChild(popoverHeader);
        popoverMain.appendChild(popoverBody);
        popoverMain.style.left = left - 20 + 'px';
        popoverMain.style.top = (top / 2 ) -5 + element.offsetHeight - popoverMain.offsetHeight / 2 + 'px';
        document.body.appendChild(popoverMain);
        popoverMain.appendChild(arrow);
    }
})