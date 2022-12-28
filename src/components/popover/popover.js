export class Popover {
    constructor(popover) {
        this._popover = popover;
        this._allPopovers = [];
    }

    createPopover(targetEl) {
        const popoverTitleConent = targetEl.getAttribute('title');
        const popoverBodyContent = targetEl.getAttribute('data-content');
        const popover_id = performance.now().toFixed();
        const { left, top} = targetEl.getBoundingClientRect();
        this.popoverContainer = document.createElement('div');
        this.popoverHeader = document.createElement('h3');
        this.popoverBody = document.createElement('div');
        this.popoverArrow = document.createElement('div');
        this.popoverContainer.classList.add('popover');
        this.popoverHeader.classList.add('popover-header');
        this.popoverBody.classList.add('popover-body');
        this.popoverArrow.classList.add('arrow');

        this.popoverHeader.textContent = popoverTitleConent
        this.popoverBody.textContent = popoverBodyContent;
        this.popoverContainer.appendChild(this.popoverHeader);
        this.popoverContainer.appendChild(this.popoverBody);
        this.popoverContainer.appendChild(this.popoverArrow);
        this.popoverContainer.style.left = left - 20 + 'px';
        this.popoverContainer.style.top = (top / 2 ) -5 + targetEl.offsetHeight - this.popoverContainer.offsetHeight / 2 + 'px';
        targetEl.setAttribute('btnid', popover_id);
        this.popoverContainer.setAttribute('popoverid', popover_id);
        this._allPopovers.push({
            id: popover_id,
            tag: this.popoverContainer,
        });
        document.body.appendChild(this.popoverContainer);
    }

    checkActive(btn) {
        return this._allPopovers.find((item) => item.id == btn.getAttribute('btnid'));
    }

    removePopover(btn) {
        let current = Array.from(document.querySelectorAll('.popover')).filter((item) => item.getAttribute('popoverid') == btn.getAttribute('btnid'));
        current[0].remove();
        this._allPopovers = this._allPopovers.filter((item) => item.id != btn.getAttribute('btnid'));
        btn.removeAttribute('btnid');
    }

}