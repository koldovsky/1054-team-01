const modalSubmit = document.querySelector('.contact-form__modal');
const closeButton = document.querySelector('.contact-form__modal-close-btn');
const btnSubmit = document.querySelector('.contact-form__submit-button');
const okModal = document.querySelector('.contact-form__modal-message-btn');
const inputSubmit = document.querySelector('.contact-form__email-input');

function closeModal() {
    modalSubmit.style.display = 'none';
}

btnSubmit.addEventListener('click', function() {
    const inputValue = inputSubmit.value.trim();
    const regex = /@/;

    if (inputValue !== '') {
        if (regex.test(inputValue)) {
            modalSubmit.style.display = 'flex';
        } else {
            alert('Please include an "@" in the email address');
        }
    } else {
        alert('Please fill out the field above the button');
    }
});

closeButton.addEventListener('click', closeModal);
okModal.addEventListener('click', closeModal);