const refs = {
  btnOpen: document.querySelector('.location-btn'),
  btnClose: document.querySelector('.location-modal-window__close-btn'),
  modal: document.querySelector('[data-modal="location"]'),
};

refs.btnOpen.addEventListener('click', openModalLocation);
refs.btnClose.addEventListener('click', closeModalLocation);

function openModalLocation() {
  refs.modal.classList.remove('is-hidden');
}
function closeModalLocation() {
  refs.modal.classList.add('is-hidden');
}
