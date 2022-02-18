import { FaCog } from 'react-icons/fa';
import './MyProjects.scss'

function MyProjects() {
    return ( 
        <div className="MyProjects">
            <div className="projectsWrapper">
                <div className="projectsHeader">
                    <h1>Moje projekty</h1>
                </div>
                <div className="projectsContent">
                    <div className="projectsItem">
                        <h2>W trakcie tworzenia <FaCog className='cog'/></h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyProjects;