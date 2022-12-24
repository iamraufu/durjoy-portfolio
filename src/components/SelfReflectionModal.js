import React from 'react';

const SelfReflectionModal = () => {
    return (
        <section className='p-2'>
            <button type="button" className="btn btn-dark fw-bold mx-auto d-block" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
                SELF-REFLECTION
            </button>

            <div className="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdrop2Label" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 fw-bold" id="staticBackdrop2Label">SELF-REFLECTION</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            <p style={{ textAlign: 'justify' }}>
                                Throughout the journey of my four and a half years in the Department of media studies and journalism, I have acquired many skills, learned new tools, understood how to interpret different cultures and how to manage the crisis that comes while doing practical work.
                                <br />
                                <br />
                                I have learned how to communicate through masks, posters, installation arts, video art and films. I realized all of these projects helped me acquire new skills and confidence for the vast field of digital production. These courses also helped me understand how media works and how I can utilize it. Through the practical courses, I understood how to convey a message through specific mediums, how to connect to the audience while also maintaining certain guidelines and deadlines. The research, campaign and script projects helped me improve my creative writing and thinking. After completing this journey, I am now confident enough to engage in the job market after doing these communication and production-based projects.
                                <br />
                                <br />
                                These years have taught me how to manage critical situations, how to work remotely and being collaborative with other people. It was a journey full of ups and downs, there were times I felt like nothing could be done, yet with the help of faculties and peers I have successfully overcome the obstacle and tried my best to produce the best possible outcome. Moving on, I will always cherish the memories and the lessons that I have learned from my fellow peers and respective faculties and will apply them in my professional field.
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

export default SelfReflectionModal;