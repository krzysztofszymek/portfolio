import './Intro.scss'
import profilePicture from './photo2.png'

function Intro() {
    return ( 
        <div className="intro">
            <div className="greetings">
                <div className="wrapper">
                    <h1>Cześć !</h1>
                    <p>Nazywam się Krzysiek</p>
                    <p>Witaj na moim portfolio !</p>
                    <br/>
                    <p>E-mail: krzysztof.r.szymek@gmail.com</p>
                </div>
            </div>
            <div className='profilePicture'>
                <img src={profilePicture} alt='profilePicture'/>
            </div>
        </div>
    );
}

export default Intro;