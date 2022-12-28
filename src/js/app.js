import Popover from '../components/popover/popover';

window.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelectorAll('.btn_danger');
  const popover = new Popover('.popover');

  btn.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const check = popover.checkActive(e.target);
      if (check) {
        popover.removePopover(e.target);
      } else {
        popover.createPopover(e.target);
      }
    });
  });
});
