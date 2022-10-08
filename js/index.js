
const configureModal = () => {
  const btnShare = document.querySelector('#btn-share');
  const modalBackdrop = document.querySelector('.modal-backdrop');
  const modalCloseBtn = document.querySelector('#modal-close');
  const modalShare = document.querySelector('#modal-share');
  const hiddenTxt = document.querySelector('#hidden-text');

  btnShare.addEventListener('click', () => {
    modalBackdrop.classList.add('visible');
    modalShare.classList.add('visible');
  });

  const closeModal = () => {
    modalBackdrop.classList.remove('visible');
    modalShare.classList.remove('visible');
    hiddenTxt.classList.add('hidden');
  };

  modalBackdrop.addEventListener('click', () => closeModal());
  modalCloseBtn.addEventListener('click', () => closeModal());
}

const copyLink = () => {
  // Get the text field
  var copyText = document.getElementById("input-clipboard");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  const hiddenTxt = document.querySelector('#hidden-text');
  hiddenTxt.classList.remove('hidden');
}

configureModal();