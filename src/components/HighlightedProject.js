import React from 'react';
import { Link } from 'react-router-dom';
import highlightedProjects from '../data/highlightedProjects';

const HighlightedProject = () => {
    return (
        <div style={{ backgroundColor: '#c8b48c' }} className='container-fluid'>
            <div className="container">
                <h2 style={{ lineHeight: '40px', letterSpacing: '16px' }} className='text-center pt-5 fw-bold text-uppercase'>Highlighted Projects</h2>

                <div className="row py-5 justify-content-center align-items-center">
                    {
                        highlightedProjects.map((project,index) =>
                            <div key={index+1} className="my-2 col-lg-3 col-md-4 col-sm-6">
                                <Link onClick={()=> window.scrollTo(0, 0)} to={`/project/${project.id}`} className='text-decoration-none'>
                                    <img style={{ height: '300px', cursor: 'pointer' }} className='img-fluid rounded project-image' src={project.image} alt="" />
                                    <h3 style={{ fontSize: '14px' }} className='mt-3 text-danger fw-bold'>{project.name}</h3>
                                </Link>
                            </div>
                        )}
                </div>
            </div>
        </div>
    );
};

export default HighlightedProject;