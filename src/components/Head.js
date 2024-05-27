//for style see index.css
import WaveButton from "./other/WaveButton";
import headerImage from "../images/header-image-min.jpg";
import backgroundImage from "../images/drawn-background-cropped.jpg";
function scroll(idString) {
  let rect = document.getElementById(idString).getBoundingClientRect();
  window.scrollTo(rect.x, rect.y);
}
export default function Head() {
  let background = new Image();
  background.src = backgroundImage;
  let image = new Image();
  image.src = headerImage;
  return (
    <div id="head-wrap">
      <span id="head1">
        <h1 id="page-title">
          therapy<b>derbyshire</b>
        </h1>
      </span>
      <span id="head2">
        <div id="navbar"></div>
      </span>
    </div>
  );
}
