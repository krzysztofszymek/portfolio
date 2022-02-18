import './Technologies.scss'

function Technologies() {
    return ( 
        <div className="Technologies">
            <div className="technologiesWrapper">
                <div className="technologiesHeader">
                    <h1>To znam</h1>
                </div>
                <div className="technologiesContent">
                    <div className="technologiesItem">
                        <img src="/img/html-icon.png" alt="html-icon"/>
                        <h1>HTML</h1>
                    </div>
                    <div className="technologiesItem">
                        <img src="/img/js-icon.png" alt="js-icon"/>
                        <h1>JavaScript</h1>
                    </div>
                    <div className="technologiesItem">
                        <img src="/img/react-icon.png" alt="react-icon"/>
                        <h1>React</h1>
                    </div>
                    <div className="technologiesItem">
                        <img src="/img/sass-icon.png" alt="sass-icon"/>
                        <h1>Sass</h1>
                    </div>
                    <div className="technologiesItem">
                        <img src="/img/c-icon.png" alt="c-icon"/>
                        <h1>C#</h1>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Technologies;