import './upButton.scss'
import { FaArrowUp } from "react-icons/fa";

function UpButton() {
    return (
        <div className="upbutton">
            <button onClick={() => window.scroll({top: 0, behavior: 'smooth'})}>
                <FaArrowUp size={30}/>
            </button>
        </div>
    );
}
export default UpButton;