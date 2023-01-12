import '../../css/Footer.css'
function getCurrentYear() {
    return new Date().getFullYear();
}
export default function Footer() {
    return (
        <div id="footer">
            <h1 id="footer-title">therapy<b>derbyshire</b></h1>

            <div id="footer-cols">

                <div className="footer-col">
                    <a>BAPT Website</a>
                    <a>What is BAPT</a>
                    <a>Cromford Mills Website</a>

                </div>
                <div className="footer-col">
                    <a>therapyderbyshire@outlook.com</a>

                </div>
                <div className="footer-col" id="footer-content-col">
                    <p>Content used:</p>
                    <a href="https://www.flaticon.com/packs/ecommerce-263" target="_blank">Flaticon : Icon Pack: Ecommerce | Solid
                    </a>
                    <a href="https://www.flaticon.com/packs/therapy-55?style_id=1&family_id=1&group_id=1" target="_blank">Flaticon : Icon Pack: Therapy | Flat
                    </a>
                    <a>Flaticon : Icon Pack: Stay Home | Lineal
                    </a>
                    <a target="_blank" href="https://www.freepik.com/free-vector/park-outdoor-scene-with-flower-field-blank-meadow_16845812.htm#query=cartoon%20garden&position=0&from_view=keyword">Freepik : Image by brgfx</a>
                    <a target="_blank" href="https://www.flickr.com/photos/leanne_walker/albums/?giftPro">Artwork by Leanne Walker</a>
                </div>
            </div>
            <div id="footer-bottom">
                <p>© {getCurrentYear()} Therapy Derbyshire</p>
            </div>

        </div>)
}