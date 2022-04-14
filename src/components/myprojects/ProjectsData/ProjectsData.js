async function ProjectsData(){
    const response = await fetch('https://portfolio-projects-5a035-default-rtdb.europe-west1.firebasedatabase.app/');

    if (!response.ok){
        throw new Error('Response Error!');
    }

    const data = await response.json();

    return data;
}

export default ProjectsData