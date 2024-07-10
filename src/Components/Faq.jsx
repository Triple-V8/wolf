import React from 'react';
import image1 from '../images/faq.png';

function Faq() {
    return (
        <div class="faq-section section-padding" id="Faq">
        <div class="container">
            <div class="row">

                <div class="col-lg-6 col-12">
                    <h2 class="text-center">Frequently Asked Questions</h2>
                </div>

                <div class="clearfix"></div>

                <div class="col-lg-5 col-12">
                    <img src={image1} class="img-fluid" alt="FAQs" />
                </div>

                <div class="col-lg-6 col-12 m-auto">
                   
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                What is Wolf?
                                </button>
                            </h2>

                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                Wolf is a memecoin built on the Scroll blockchain, aiming to create a strong and fun community with a unique tokenomics model.
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                How can I buy Wolf?
                            </button>
                            </h2>

                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                You can buy Wolf on various crypto exchanges once it is listed. Stay tuned for announcements!
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                What makes Wolf unique?
                            </button>
                            </h2>

                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                Wolf combines the power of scroll blockchain technology with a community-driven approach and engaging activities to ensure growth and fun.
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        
    </div>
    );
  }
  
  export default Faq;