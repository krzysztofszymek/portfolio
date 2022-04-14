import { useEffect, useState } from 'react';
import './MyProjects.scss'
import ProjectsItem from './ProjectsItem/ProjectsItem';

function MyProjects() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function ProjectsData(){
            const response = await fetch('https://portfolio-projects-5a035-default-rtdb.europe-west1.firebasedatabase.app/projects.json');
            if (!response.ok){ throw new Error('Response Error!'); }
            const responseData = await response.json();

            console.log(responseData);
            let newData = [];
            for(const key in responseData){
                newData.push({
                    id: key,
                    title: responseData[key].title,
                    description: responseData[key].description,
                    img: responseData[key].img,
                    alt: responseData[key].alt,
                    link: responseData[key].link
                })
            }
            console.log(newData);
            setData(newData);
        }
        ProjectsData();
    }, []);
    
    return ( 
        <div className="MyProjects">
            <div className="projectsWrapper">
                <div className="projectsHeader">
                    <h1>Moje projekty</h1>
                </div>
                <div className="projectsContent">
                    {data.map((item) => 
                        <ProjectsItem
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            img={item.img}
                            alt={item.alt}
                            link={item.link}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default MyProjects;