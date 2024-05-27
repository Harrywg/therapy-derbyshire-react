import "../../css/Home.css";
import hand from "../../images/icons/goodwill.png";
import WaveButton from "../other/WaveButton";
import headerImage from "../../images/header-image-min.jpg";
function scroll(idString) {
  let rect = document.getElementById(idString).getBoundingClientRect();
  window.scrollTo(rect.x, rect.y);
}
export default function Home() {
  return (
    <div className="page-wrap">
      <div id="home">
        <div id="home-content">
          <div id="tagline-wrap">
            <div id="tagline">
              <h1 style={{ textAlign: "center", paddingBottom: "2rem" }}>
                Thank you for visiting.
              </h1>
              <p style={{ marginTop: "1rem" }}>
                While we are no longer in operation, we encourage you to look at
                the resources below for play therapy and other therapy
                enquiries.
              </p>
              <ul
                style={{ marginTop: "1rem", maxWidth: "28rem", margin: "auto" }}
              >
                <li style={{ marginTop: "1rem" }}>
                  <a href="https://www.bapt.info/" target="_blank">
                    BAPT: British Association of Play Therapists
                  </a>
                </li>
                <li style={{ marginTop: "1rem" }}>
                  <a href="https://baat.org/" target="_blank">
                    BAAT: British Association of Art Therapists
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* <iframe id="maps-embed" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2395.0617461174734!2d-1.558085283995992!3d53.10908370015704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48798bce5c2e845b%3A0x9f85d51091a90af9!2sCromford%20Mills!5e0!3m2!1sen!2suk!4v1673135785702!5m2!1sen!2suk" allowFullScreen={"no"} loading={"lazy"} referrerPolicy={"no-referrer-when-downgrade"}></iframe> */}
          {/* <button><div>Find Out More</div>
                    </button> */}
        </div>
      </div>

      {/* <div id="home-border-wrap">
                <div id="home-border"></div>
            </div> */}
    </div>
  );
}
