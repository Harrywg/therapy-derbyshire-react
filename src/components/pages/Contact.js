import '../../css/Contact.css'
import chat from '../../images/icons/chat.png'
import WaveButton from '../../components/other/WaveButton'
export default function Contact() {

    return (<div id="contact">
        <h1>Get in touch</h1>
        <img id="contact-icon" src={chat}></img>
        <form action="https://formsubmit.co/wardgray24@gmail.com" method="post" id="contact-form">
            <input type="text" name="name" placeholder="Name"></input>
            <input type="email" name="email" placeholder="Email"></input>
            <input type="text" name="_subject" placeholder="Subject"></input>
            <textarea type="text" name="message" placeholder="Message"></textarea>
            {/* <button id="contact-submit">Send message</button>
             */}
            <WaveButton textContent="Send Message" />
        </form>
    </div>)

    //----TRY DOING SOMETHING LIKE THIS 

    // // https://github.com/github/fetch
    // fetch("https://formsubmit.co/ajax/your@email.com", {
    //     method: "POST",
    //     headers: { 
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         name: "FormSubmit",
    //         message: "I'm from Devro LABS"
    //     })
    // })
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(error => console.log(error));
}