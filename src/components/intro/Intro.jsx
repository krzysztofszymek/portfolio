import './Intro.scss'
import profilePicture from './photo2.png'

function Intro() {
    return ( 
        <div className="intro">
            <div class="greetings">
                <div className="wrapper">
                    <h1>Cześć !</h1>
                    <h1>Nazywam się Krzysiek</h1>
                    <h2>Witaj na moim portfolio !</h2>
                    <br/>
                    <h4>E-mail: kszymek33@gmail.com</h4>
                </div>
            </div>
            <div className='profilePicture'>
                <img src={profilePicture} alt='profilePicture'/>
            </div>
        </div>
    );
}

export default Intro;