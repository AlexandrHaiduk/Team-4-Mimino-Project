const refsRoom = {
    openModalBtn: document.querySelector('[data-modal-room-open]'),
    openModalBtn1: document.querySelector('[data-modal-room-open-1]'),
    closeModalBtn: document.querySelector('[data-modal-room-close]'),
    modal: document.querySelector('[data-modal-room-1]'),
  };

  function toggleModalRoom() {
    refsRoom.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
  }
  function toggleModalClickOutsideRoom(e) {
    if(e.target === refsRoom.modal){
      refsRoom.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
    }
  }

const modalOpenRoom = (refs) => {
  console.log(refs)
  console.log(123)
  if(refs.openModalBtn)refs.openModalBtn.addEventListener('click', toggleModalRoom);
  if(refs.openModalBtn1)refs.openModalBtn1.addEventListener('click', toggleModalRoom);
  if(refs.closeModalBtn)refs.closeModalBtn.addEventListener('click', toggleModalRoom);
  document.addEventListener('click',toggleModalClickOutsideRoom)
}
modalOpenRoom(refsRoom)