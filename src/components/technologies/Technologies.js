import './Technologies.scss'

function Technologies() {
    return ( 
        <div className="Technologies">
            <div className="technologiesWrapper">
                <div className="technologiesHeader">
                    <h1>Ulubione technologie</h1>
                </div>
                <div className="technologiesContent">
                    <div className="technologiesItem">
                        <img src="/img/html-icon.png" alt="html-icon"/>
                        <p>HTML</p>
                    </div>
                    <div className="technologiesItem">
                        <img src="/img/js-icon.png" alt="js-icon"/>
                        <p>JavaScript</p>
                    </div>
                    <div className="technologiesItem">
                        <img src="/img/react-icon.png" alt="react-icon"/>
                        <p>React</p>
                    </div>
                    <div className="technologiesItem">
                        <img src="/img/sass-icon.png" alt="sass-icon"/>
                        <p>Sass</p>
                    </div>
                    <div className="technologiesItem">
                        <img src="/img/c-icon.png" alt="c-icon"/>
                        <p>C#</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Technologies;