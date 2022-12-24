import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import IntroductionModal from '../components/IntroductionModal';
import Navbar from '../components/Navbar';
import ObjectivesModal from '../components/ObjectivesModal';
import SelfReflectionModal from '../components/SelfReflectionModal';
import projectsData from '../data/projects.json'

const UndergraduatePortfolio = () => {
    return (
        <section>
            <Navbar />
            <div style={{ backgroundColor: '#ececec' }} className="container-fluid">
                <div className="container">
                    <h2 className="text-center pt-5 fw-bold">My Projects</h2>

                    <div className="row justify-content-around align-items-center mt-5">
                        <div className="col-md-4">
                            <IntroductionModal />
                        </div>
                        <div className="col-md-4">
                            <SelfReflectionModal />
                        </div>
                        <div className="col-md-4">
                            <ObjectivesModal />
                        </div>
                    </div>

                    <div className="row py-5 justify-content-center align-items-center">
                        {
                            projectsData.map(project =>
                                <div style={{ minHeight: '280px' }} className="col-lg-3 col-md-4 col-sm-6">
                                    <Link to={`/project-${project.id}`} className='text-decoration-none'>
                                        <img className='img-fluid project-image rounded' src={project.image} alt="project" />
                                        <h3 style={{ fontSize: '14px' }} className='my-3 px-1 text-danger fw-bold'>{project.name}</h3>
                                    </Link>
                                </div>
                            )}
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default UndergraduatePortfolio;