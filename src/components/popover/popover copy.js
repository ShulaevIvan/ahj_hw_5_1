export class Popover {
    constructor(popover, btn) {
        this._popover = popover;
        this._allPopovers = [];
    }

    createPopover(targetEl) {
        let popover_id = performance.now().toFixed()
        const { left, top} = targetEl.getBoundingClientRect();
        this.popoverContainer = document.createElement('div');
        this.popoverHeader = document.createElement('h3');
        this.popoverBody = document.createElement('div');
        this.popoverArrow = document.createElement('div');
        this.popoverContainer.classList.add('popover');
        this.popoverHeader.classList.add('popover-header');
        this.popoverBody.classList.add('popover-body');
        this.popoverArrow.classList.add('arrow')

        this.popoverHeader.textContent = 'Popover title';
        this.popoverBody.textContent = 'And here s some amazing content. It s very engaging. Right?';
        this.popoverContainer.appendChild(this.popoverHeader);
        this.popoverContainer.appendChild(this.popoverBody);
        this.popoverContainer.appendChild(this.popoverArrow);
        this.popoverContainer.style.left = left - 20 + 'px';
        this.popoverContainer.style.top = (top / 2 ) -5 + targetEl.offsetHeight - this.popoverContainer.offsetHeight / 2 + 'px';
        document.body.appendChild(this.popoverContainer);
    }

    removePopover(id) {
        console.log(this._allPopovers)
    }

}