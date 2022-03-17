import './MyProjects.scss'
import ProjectsData from './ProjectsData/ProjectsData';
import ProjectsItem from './ProjectsItem/ProjectsItem';

function MyProjects() {
    console.log(ProjectsData);
    return ( 
        <div className="MyProjects">
            <div className="projectsWrapper">
                <div className="projectsHeader">
                    <h1>Moje projekty</h1>
                </div>
                <div className="projectsContent">
                    {/*<div className="projectsItem">
                        <h2>W trakcie tworzenia <FaCog className='cog'/></h2>
                    </div>*/}
                    {
                        ProjectsData.map((item) => 
                            <ProjectsItem
                                key={item.title}
                                title={item.title}
                                description={item.description}
                                img={item.img}
                                alt={item.alt}
                                link={item.link}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default MyProjects;