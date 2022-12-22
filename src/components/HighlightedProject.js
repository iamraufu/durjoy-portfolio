import React from 'react';

const HighlightedProject = () => {
    return (
        <div style={{ backgroundColor: '#c8b48c' }} className='container-fluid'>
            <div className="container">
                <h2 style={{ lineHeight: '40px', letterSpacing: '16px' }} className='text-center pt-5 fw-bold text-uppercase'>Highlighted Projects</h2>
                
                <div className="row py-5 justify-content-center align-items-center">
                    <div className="col-md-2"></div>
                    <div className="col-md-2">
                        <img width={180} src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" className='img-fluid rounded' alt="" />
                        <h3 className='fs-6 mt-2 text-danger fw-bold'>Project Name</h3>
                    </div>
                    <div className="col-md-2">
                        <img width={180} src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" className='img-fluid rounded' alt="" />
                        <h3 className='fs-6 mt-2 text-danger fw-bold'>Project Name</h3>
                    </div>
                    <div className="col-md-2">
                        <img width={180} src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" className='img-fluid rounded' alt="" />
                        <h3 className='fs-6 mt-2 text-danger fw-bold'>Project Name</h3>
                    </div>
                    <div className="col-md-2">
                        <img width={180} src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" className='img-fluid rounded' alt="" />
                        <h3 className='fs-6 mt-2 text-danger fw-bold'>Project Name</h3>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </div>
    );
};

export default HighlightedProject;