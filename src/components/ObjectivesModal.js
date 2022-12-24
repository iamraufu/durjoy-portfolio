import React from 'react';

const ObjectivesModal = () => {
    return (
        <section className='p-2'>
            <button type="button" className="btn btn-dark fw-bold mx-auto d-block" data-bs-toggle="modal" data-bs-target="#staticBackdrop3">
            OBJECTIVES
            </button>

            <div className="modal fade" id="staticBackdrop3" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdrop3Label" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 fw-bold" id="staticBackdrop3Label">OBJECTIVES</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        
                        <div className="modal-body">
                            <p style={{textAlign:'justify'}}>
                            The journey of four and a half years in ULAB was about discovering my strengths and working on my limitations. In these four years I have found myself in the vast field of digital production. While making the final portfolio I had so many expectations about myself. One of the most important of them was gaining knowledge on digital media and production. As a student of Digital Film and TV production, I wanted to be an expert in one specific field first, which was creative writing. I wanted to strengthen my creative writing skills so that I can apply my knowledge in practical situations. Needless to say, after completing my journey at ULAB I am now a much better creative writer who is able to meet the client’s specific requirements. Another key aspect of my portfolio objective was developing communication skills. In order to be a better communicator I had to develop some other skills as well such as being an attentive listener, being aware of the situation and being able to act on critical situations. One of the best things that I learned at this institution was being collaborative, I learned how to be a team-player, developed leadership skills and became better at managing crises. Another main purpose of completing this journey was to learn how to be adaptive to new situations needless to say, after completing this journey I am now open to new challenges and more confident enough to face any critical situation that comes while working on the field of digital media and production. 
                            </p>

                        </div>
                        
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ObjectivesModal;