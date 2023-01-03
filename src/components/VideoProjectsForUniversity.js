import React from 'react';
import projectData from '../data/projects.js'

const VideoProjectsForUniversity = () => {
    return (
        <div className='container my-5'>
            <h2 className='fs-6 fw-bold'>Video Projects For University</h2>
            <div className="row">
            {
                projectData.map(project =>
                    project.yt_link &&
                        <div key={project.id} className="col-sm-6 mb-5">
                            <div className="responsive-embed-youtube">
                                <iframe className='my-5' width="100%" height='auto' src={`${project?.yt_link}?controls=0`} title={project?.project_name} style={{ borderRadius: '22px' }} allowFullScreen srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=${project?.yt_link}?controls=0><img src=${project?.image} alt=${project?.project_name} loading="lazy"><span>▶</span></a>`}
                                ></iframe>
                            </div>
                        </div>
                )}
                </div>
        </div>
    );
};

export default VideoProjectsForUniversity;