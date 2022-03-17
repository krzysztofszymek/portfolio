import './Interests.scss'
import { FaGamepad, FaLanguage, FaCropAlt} from 'react-icons/fa'

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
                        <p>Gry</p>
                    </div>
                    <div className="interestsItem">
                        <FaLanguage size={70}/>
                        <p>Języki obce</p>
                    </div>
                    <div className="interestsItem">
                        <FaCropAlt size={60}/>
                        <p>Obróbka obrazów</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Interests;