import './Interests.scss'
import { FaGamepad, FaLanguage, FaPaintBrush, FaPaintRoller, FaPalette } from 'react-icons/fa'

function Interests() {
    return ( 
        <div className="Interests">
            <div className="interestsWrapper">
                <div className="interestsHeader">
                    <h1>Moje zainteresowania</h1>
                </div>
                <div className="interestsContent">
                    <div className="interestsItem">
                        <FaGamepad size={70}/>
                        <h2>Gry</h2>
                    </div>
                    <div className="interestsItem">
                        <FaLanguage size={70}/>
                        <h2>Języki obce</h2>
                    </div>
                    <div className="interestsItem">
                        <FaPalette size={60}/>
                        <h2>Obróbka obrazów</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Interests;