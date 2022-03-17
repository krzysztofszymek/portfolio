import './ProjectsItem.scss'

function ProjectsItem(props) {
    return (
        <div className="project-item" >
            <div className="title">
                {props.title}
            </div>
            <div className="content">
                <div className="image">
                    <img src={props.img} alt={props.alt}/>
                </div>
                <div className="description">
                    {props.description}
                </div>
            </div>
        </div>
    );
}

export default ProjectsItem;