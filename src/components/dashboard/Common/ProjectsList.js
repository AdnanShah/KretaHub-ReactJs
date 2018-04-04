import React from 'react';
import ProjectsCell from './ProjectsCell';


const ProjectsList = ({data}) => {
    return (
        <div className="table-responsive-material">
            <table className="default-table table table-sm remove-table-border table-hover">
                <thead>
                <tr>
                    <th scope="col">Project</th>
                    <th scope="col" className="text-center">Date</th>
                    <th scope="col" className="text-center">Status</th>
                    <th scope="col" />
                </tr>
                </thead>
                <tbody>
                {data.map(data => {
                    return (
                        <ProjectsCell key={data.id} data={data} />
                    );
                })}
                </tbody>
            </table>
        </div>
    );

};

export default ProjectsList;