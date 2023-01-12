import '../../css/About.css'
import friends from '../../images/icons/friends.png'
import profile from '../../images/Sarah.jpg'
import baptLogo from '../../images/bapt.jpg'
export default function About() {

    return (
        <div id="about-wrap">
            <div id="about-main-wrap">
                <div id="about-header-wrap">
                    <h1 id="about-header">Who are we?</h1>
                    <img id="about-friends" src={friends}></img>
                </div>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio aspernatur, quas, inventore earum excepturi reprehenderit quasi consequatur omnis culpa dolorem dolor tempora, minima consectetur amet. Iusto culpa possimus illo quidem.
                </p>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio aspernatur, quas, inventore earum excepturi reprehenderit quasi consequatur omnis culpa dolorem dolor tempora, minima consectetur amet. Iusto culpa possimus illo quidem.
                </p>
            </div>
            <div id="about-sidebar-wrap">
                <div id="about-sidebar-wrap-top">
                    <img id="about-profile" src={profile}></img>
                    <div id="about-sidebar-text-wrap">
                        <h1>Sarah Gray</h1>
                        <p>BAPT® registered <b>play therapist</b> and <b>supervisor.</b></p>
                    </div>
                </div>
                <div id="about-sidebar-wrap-bottom">
                    <img id="about-sidebar-logo" src={baptLogo}></img>
                    <div id="about-sidebar-link-wrap">
                        <a target="blank" href="https://www.bapt.info/">BAPT Website</a>
                        <a target="blank" href="./what-is-bapt.pdf">What is BAPT?</a>
                    </div></div>
            </div>
        </div>
    )
}
