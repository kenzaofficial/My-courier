// eslint-disable-next-line no-undef
const doc = document;
doc.addEventListener('DOMContentLoaded', () => {
  const submitBtn = doc.querySelector('.form__button');

  submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
  });
});
