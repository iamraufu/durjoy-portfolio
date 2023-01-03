import React from 'react';
import dp from '../images/dp.jpg'
import resume from '../files/Resume of Shafayet.pdf'

const Hero = () => {
    return (
        <div style={{ backgroundColor: '#ececec' }} className="container-fluid py-5">
            <div className='container'>
                <div style={{ backgroundColor: '#f8f4ec', boxShadow: '0 8px 16px #0a0a0a1a' }} className="row">
                    <div className="col-md-8">
                        <div style={{ minHeight: '100px' }} className="d-flex justify-content-center align-items-center">
                            <h1 className='text-center fs-3 text-uppercase'>Welcome to <span className='text-danger fw-bold'>Shafayet Muttaky Durjoy</span>'s Profile</h1>
                        </div>
                        <p style={{ textAlign: 'justify' }} className='p-2'>I am able to analyze critically, express myself articulately, take photographs, and create films. I thrive in professional settings and can keep cool under intense time constraints. I like learning about new things and challenging myself. To further my career, I am committed to expanding my expertise in my field of choice. Along the way, I often pick up new information and abilities.
                            <br /><br />
                            I am an undergraduate student in the Media Studies and Journalism department. At the University of Liberal Arts Bangladesh, I majored in DP (Digital Tv and Film Production) under a Bachelor of Social Science.</p>
                        <div className="d-flex justify-content-between">
                            <div className="">
                                <a href={resume} download='Resume of Shafayet'>
                                    <button className='btn btn-sm btn-primary m-2'>Download CV</button>
                                </a>
                            </div>
                            
                            <div className="mt-2">
                                <img className='mx-2' src="https://static.wixstatic.com/media/11062b_2381e8a6e7444f4f902e7b649aa3f0ac~mv2.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_2381e8a6e7444f4f902e7b649aa3f0ac~mv2.png" alt="fb" />
                                <img className='mx-2' src="https://static.wixstatic.com/media/11062b_55e4be1e75564866b6c28290f9a9d271~mv2.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_55e4be1e75564866b6c28290f9a9d271~mv2.png" alt="ig" />
                                <img className='mx-2' src="https://static.wixstatic.com/media/11062b_8dcadfa428954b1d919f8499f75aa27a~mv2.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_8dcadfa428954b1d919f8499f75aa27a~mv2.png" alt="yt" />
                                <img className='mx-2' src="https://static.wixstatic.com/media/11062b_ee201fc429cd47b38dcab633e6e8ec3f~mv2.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_ee201fc429cd47b38dcab633e6e8ec3f~mv2.png" alt="wa" />
                            </div>
                        </div>
                    </div>

                    <div style={{ padding: '0' }} className="col-md-4">
                        <img className='img-fluid ms-auto d-block' width={400} src={dp} alt="Shafayet Muttaky Durjoy" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;