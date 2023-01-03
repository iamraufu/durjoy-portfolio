import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import projectsData from '../data/projects'
import NotFound from './NotFound';

const Project = () => {

    const { id } = useParams()
    const project = projectsData?.filter(project => project.id === parseInt(id))

    return (
        <>
            {
                project?.length === 0 ?
                    <NotFound /> :
                    <>
                        <Navbar />
                        <div className="project py-5">
                            <div className="container">

                                <h1 className='text-center fw-bold fs-2'>PROJECT {project[0]?.id}</h1>
                                <img width={600} className='rounded mx-auto d-block img-fluid my-5' src={project[0]?.image} alt={project[0]?.name} />
                                <p>
                                    <b>Course Name:</b> {project[0]?.course_name}
                                    <br />
                                    <b>Course Code:</b> {project[0]?.course_code}
                                </p>

                                <p>
                                    <b>Project Name:</b> {project[0]?.project_name}
                                </p>

                                <h2 className="fw-bold fs-5">Project Introduction</h2>
                                <p>{project[0]?.project_intro}</p>
                                <h2 className="fw-bold fs-5">Project Justification</h2>
                                <p>{project[0]?.project_justification}</p>

                                <a href={project[0]?.drive_link} target='_blank' rel="noreferrer">
                                    <button className='btn btn-primary px-3 mx-auto d-block'>Click Here For Project Detail</button>
                                </a>

                                {
                                    project[0]?.yt_link &&
                                    <div className="responsive-embed-youtube">
                                        <iframe className='my-5' width="100%" height='auto' src={`${project[0]?.yt_link}?controls=0`} title={project[0]?.project_name} style={{ borderRadius: '22px' }} allowFullScreen srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=${project[0]?.yt_link}?controls=0><img src=${project[0]?.image} alt=${project[0]?.project_name} loading="lazy"><span>▶</span></a>`}
                                        ></iframe>
                                    </div>
                                }

                                <h2 className="fw-bold fs-5 mt-5 pt-5">Learning and Outcome (Self-Reflection)</h2>
                                <p>{project[0]?.self_reflection}</p>
                            </div>
                        </div>
                        <Footer />
                    </>
            }
        </>
    );
};

export default Project;