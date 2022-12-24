import React from 'react';

const IntroductionModal = () => {
    return (
        <section className='p-2'>
            <button type="button" className="btn btn-dark fw-bold text-uppercase mx-auto d-block" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Introduction
            </button>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 fw-bold" id="staticBackdropLabel">Introduction</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        
                        <div className="modal-body">
                            <p style={{textAlign:'justify'}}>
                                The core courses of the Media Studies and Journalism (MSJ) department, as well as the notable courses from my major Digital Film and TV Production (DP) are included in this portfolio. The portfolio focuses on communication research, creative content creation, understanding the new and the conventional media, developing campaigns, understanding the field of digital production and first-hand experience of production both behind and in front of the camera to show their creativity as well as adaptability to new crises. One of the key aspects of ULAB is to make the students be ready for any critical situations. Through different creative writing, problem solving practical courses the university sets up a prime example of what the field of digital production looks like and helps students to be prepared.
                                <br />
                                <br />
                                For me, the four and a half years at ULAB were an astonishing adventure containing ups and downs. All of these classNamees and projects have allowed me to enhance my knowledge further on theoretical understanding while also gaining practical experience. Some of these projects have allowed me to understand the basics behind and in front of the camera, some taught me how to conduct a research, focus group discussion and how to properly write a research proposal. Producing creative contents and outputs such as video art, installation art, music video, short film and so on enhanced my creative abilities and prepared me for the vast field of digital media and production. These courses have allowed me to get out of my working zone and how to make things work one at a time. I have learned how to control the temper when things get out of hand and how to manage the situations. Throughout this journey, ULAB tried its best to give the students academic and practical knowledge on their respective field and the major of their choosing. It was a very stressful yet pleasant ride that helped me to get on my feet and taught me how to be a person of digital production. I will thoroughly cherish these memories and lessons all throughout my life. Being a student of Media Studies and Journalism and the University of Liberal Arts, Bangladesh has made me a better creative person, a better writer, a more successful critical thinker and overall, humbler and more passionate towards my professional and academic life.
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

export default IntroductionModal;