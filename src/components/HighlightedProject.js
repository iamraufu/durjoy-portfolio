import React from 'react';

const HighlightedProject = () => {
    return (
        <div style={{ backgroundColor: '#c8b48c' }} className='container-fluid'>
            <div className="container">
                <h2 style={{ lineHeight: '40px', letterSpacing: '16px' }} className='text-center pt-5 fw-bold text-uppercase'>Highlighted Projects</h2>

                <div className="row py-5 justify-content-center align-items-center">
                    <div className="col-md-2"></div>
                    <div className="col-md-2">
                        <img width={180} src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" className='img-fluid rounded project-image' alt="" />
                        <h3 className='fs-6 mt-2 text-danger fw-bold'>Project Name</h3>
                    </div>
                    <div className="col-md-2">
                        <img width={180} src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" className='img-fluid rounded project-image' alt="" />
                        <h3 className='fs-6 mt-2 text-danger fw-bold'>Project Name</h3>
                    </div>
                    <div className="col-md-2">
                        <img width={180} src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" className='img-fluid rounded project-image' alt="" />
                        <h3 className='fs-6 mt-2 text-danger fw-bold'>Project Name</h3>
                    </div>
                    <div className="col-md-2">
                        <img width={180} src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" className='img-fluid rounded project-image' alt="" />
                        <h3 className='fs-6 mt-2 text-danger fw-bold'>Project Name</h3>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </div>
    );
};

export default HighlightedProject;