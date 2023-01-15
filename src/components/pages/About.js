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
                    Therapy Derbyshire was setup by Sarah Gray in
                    Cromford Mill, Derbyshire,
                    collaborating with co-workers and colleagues.
                </p>
                <p>
                    Sarah is a Social Worker, Play Therapist, EMDR Therapist, Supervisor, Systemic Family
                    Practitioner, Eating Disorder Specialist with over 40 years’ experience working with young
                    people and their families and carers.
                </p>
                <p>Sarah has worked for 20 years as Clinical Lead for
                    CAMHS (Child and Adolescent Mental Health Services) as well as extensive work with young
                    people who have experience of the Care System.
                </p>
                {/* <p>Sarah works from a Therapy Room at
                    Cromford Mill, Derbyshire which she shares with other therapists and counsellors.
                </p> */}
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
