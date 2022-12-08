const refsPrice = {
  openModalBtn: document.querySelector('[data-modal-price-open]'),
  closeModalBtn: document.querySelector('[data-modal-price-close]'),
  openModalBtn1: document.querySelector('[data-modal-price-1-open]'),
  openModalBtn2: document.querySelector('[data-modal-price-3p-open]'),
  openModalBtn3: document.querySelector('[data-modal-price-2p-open]'),
  modal: document.querySelector('[data-modal-price]'),
};

function toggleModalPrice(e) {
  const modalApartmentType = refsPrice.modal.children[0].children[1].children[1]
  if (e.target === refsPrice.openModalBtn)modalApartmentType.textContent = 'Двомісний люкс'
  if (e.target === refsPrice.openModalBtn1)modalApartmentType.textContent = 'Двомісний люкс'
  if (e.target === refsPrice.openModalBtn3)modalApartmentType.textContent = 'Двомісний номер'
  if (e.target === refsPrice.openModalBtn2)modalApartmentType.textContent = 'Трьохісний номер'
  refsPrice.modal.classList.toggle('is-hidden');
  document.body.classList.toggle('modal-open');
}

function toggleModalClickOutsidePrice(e) {
  if(e.target === refsPrice.modal){
    refsPrice.modal.classList.toggle('is-hidden');
  document.body.classList.toggle('modal-open');
  }
}

const modalOpenPrice = (refs) => {
  console.log(refs)
  console.log(123)
  if(refs.openModalBtn)refs.openModalBtn.addEventListener('click', toggleModalPrice);
  if(refs.openModalBtn1)refs.openModalBtn1.addEventListener('click', toggleModalPrice);
  if(refs.openModalBtn2)refs.openModalBtn2.addEventListener('click', toggleModalPrice);
  if(refs.openModalBtn3)refs.openModalBtn3.addEventListener('click', toggleModalPrice);
  if(refs.closeModalBtn)refs.closeModalBtn.addEventListener('click', toggleModalPrice);
  document.addEventListener('click',toggleModalClickOutsidePrice)
}
modalOpenPrice(refsPrice)


