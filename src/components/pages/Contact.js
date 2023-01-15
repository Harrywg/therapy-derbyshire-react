import ReactLoading from "react-loading";

import '../../css/Contact.css'
import chat from '../../images/icons/chat.png'
import WaveButton from '../../components/other/WaveButton'
import tick from '../../images/icons/accept.png'
function handleFormSubmit(e) {
    let form = document.forms['contact-form'];

    //keeps default HTML form validation whilst utilising AJAX
    if (!form.elements[0].value || !form.elements[1].value || !form.elements[2].value || !form.elements[3].value) {
        return
    }
    form.classList.add('form-button-clicked')
    document.getElementById('form-loading').classList.add('form-loading-active')

    e.preventDefault();
    fetch("https://formsubmit.co/ajax/wardgray24@gmail.com", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: form.elements[0].value,
            email: form.elements[1].value,
            _subject: form.elements[2].value,
            message: form.elements[3].value,
        })
    })
        .then(response => response.json())
        .then(() => {
            setTimeout(() => {
                document.getElementById('form-loading').classList.remove('form-loading-active')
                let formChildrenArray = Array.prototype.slice.call(document.getElementById('form-submitted').children)
                formChildrenArray.forEach((child) => {
                    child.classList.add('active')
                })
            }, 500)
        })
        .catch(error => console.log(error));
}

export default function Contact() {

    return (<div id="contact">
        <h1>Get in touch</h1>
        <img id="contact-icon" src={chat}></img>
        <form id="contact-form">
            <input id="form-input-name" type="text" name="name" placeholder="Name" required></input>
            <input id="form-input-email" type="email" name="email" placeholder="Email" required></input>
            <input id="form-input-subject" type="text" name="_subject" placeholder="Subject" required></input>
            <textarea id="form-input-message" type="text" name="message" placeholder="Message" required></textarea>
            {/* <button id="contact-submit">Send message</button>
             */}
            <WaveButton elementId="form-submit-button" handleClick={handleFormSubmit} textContent="Send Message" />

        </form>
        <ReactLoading id="form-loading" type="bubbles" color="white"
            height={100} width={50} />
        <div id="form-submitted">
            <img id="form-submitted-tick" src={tick}></img>
            <p>Message received, thanks for getting in touch!
            </p>
            <p>We'll try and get back to you as soon as we can.</p>

        </div>
        <p id="contact-text">Alternatively find our contact details listed below</p>    </div>)
}