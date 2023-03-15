function submitForm() {
    const contactForm = document.forms['contact-form'];

    if (!contactForm.email.value) {
        alert('Email is mandatory!');
        return false;
    }
    
    alert('Your query is successfully submitted.');
    return false;
}