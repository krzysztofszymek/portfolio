import './upButton.scss'
import { FaArrowUp } from "react-icons/fa";

function UpButton() {
    return (
        <div className="upbutton">
            <button onClick={() => (window.scrollTo(0, 0))}>
                <FaArrowUp size={30}/>
            </button>
        </div>
    );
}
export default UpButton;