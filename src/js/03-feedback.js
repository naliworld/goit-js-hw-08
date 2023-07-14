
import throttle from 'lodash.throttle';

const feedbackform = 'feeback-form-state';

const refs = {
    formRef: document.querySelector('form'),
    emailRef: document.querySelector('input'),
    messageRef: document.querySelector('textarea'),
};

refs.formRef.addEventListener('submit', onFormSubmit);
refs.formRef.addEventListener('input', throttle(onFormInput, 500));

reloadPage();

function onFormInput() {
    const inputInfo = {
        email: refs.emailRef.value.trim(),
        message: refs.messageRef.value,
    };
    localStorage.setItem(feedbackform, JSON.stringify(inputInfo));
}

function reloadPage() {
    const formStorage = JSON.parse(localStorage.getItem(feedbackform)) || {};
    const { email, message } = formStorage;
    if (formStorage) {
        refs.emailRef.value = email || '';
        refs.messageRef.value = message || '';
    }
}

function onFormSubmit(e) {
    e.preventDefault();
    if (refs.emailRef.value === '' || refs.messageRef.value === '') {
        return alert(`Please fill in all the fields!`);
    }
    console.log({
        email: refs.emailRef.value.trim(),
        message: refs.messageRef.value,
    });
    
    localStorage.removeItem(feedbackform);
    e.currentTarget.reset();
}