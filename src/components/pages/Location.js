import '../../css/Location.css'
import quote from '../../images/quote1.jpg'

export default function Location() {
    return (
        <div id="location">
            <iframe id="gmap-embed" src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2395.0617461175025!2d-1.5580852839959796!3d53.10908370015705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48798bce5c2e845b%3A0x9f85d51091a90af9!2sCromford%20Mills!5e0!3m2!1sen!2suk!4v1673386706795!5m2!1sen!2suk"} width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div id="location-text">
                <h1>Come and meet us at <a href="https://www.cromfordmills.org.uk/" target="_blank">Cromford Mills</a></h1>
                <p>
                    We are based in a therapeutic environment in the historically important Cromford Mill, surrounded by local walks, cafés and independant local shops/businesses.</p><p> Initial contact can take place over the phone when we will decide if you would like to meet
                        up face to face or virtually to discuss what therapy or support is available.

                </p>
            </div>
            <div id="location-quote-wrap">
                <div id="location-quote-rainbow-element">
                    <div className="rainbow-element" ></div>
                    <div className="rainbow-element"></div>
                    <div className="rainbow-element"></div>
                    <div className="rainbow-element"></div>
                    <div className="rainbow-element"></div>
                    <div className="rainbow-element"></div>

                </div>
                <img id="location-quote" src={quote}></img>
            </div>

        </div>
    )
}