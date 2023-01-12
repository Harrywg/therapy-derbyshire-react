import '../../css/WaveButton.css'
export default function Waves(props) {
    return (
        <button style={props.style} id={props.elementId} onClick={props.handleClick} className="wave-container">

            <p>{props.textContent}</p>
            <div className="water-effect">

                <div className="water">
                    <div className="waves">
                        <p className="text-after">{props.textContent}</p>

                    </div>
                </div>
            </div>
        </button>
    )
}