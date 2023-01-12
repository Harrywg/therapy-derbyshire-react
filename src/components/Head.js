//for style see index.css
import WaveButton from './other/WaveButton'
function scroll(idString) {
    let rect = document.getElementById(idString).getBoundingClientRect();
    window.scrollTo(rect.x, rect.y);
}
export default function Head() {
    let background = new Image();
    background.src = "../images/drawn-background-cropped.jpg"
    let image = new Image();
    image.src = "https://media.istockphoto.com/id/1138257835/photo/closeup-of-woman-playing-with-child.jpg?s=612x612&w=0&k=20&c=n0xO_PAssVrAFsrsTO3asJ0sgc80Lz_ZeBJjZJzy_68="
    console.log(image)
    return (
        <div id="head-wrap">
            <span id="head1">
                <h1 id="page-title">therapy<b>derbyshire</b></h1>
            </span>
            <span id="head2">
                <div id="navbar">
                    <button onClick={() => scroll('services')} id="navbar-1">Services</button>
                    <span>|</span>
                    <button onClick={() => scroll('about-wrap')} id="navbar-1">About</button>
                    <WaveButton handleClick={() => scroll('contact')} elementId="navbar-2" textContent="Contact Us" />
                </div>
            </span>
        </div>
    )
}