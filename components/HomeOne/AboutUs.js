import React, { Component } from 'react';
import Link from 'next/link';

class AboutUs extends Component {
    render() {
        return (
            <section className="about-section pb-100" id="about-us">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-image">
                                <img src="/images/about.png" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content">
                                <span>Why Chose Us</span>
                                <h2>Designed to build a fit dynamic resilient nation</h2>
                                <p>Two out of three Indian children are physically unfit. That’s because they aren’t playing enough. enJogo’s vision is to build a fit, dynamic and resilient nation by making sports more fun and accessible to all.</p>

                                <ul className="about-list">
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        ROCKET FAST
                                        <p>Elderly is detract tedious assured private</p>
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        CUSTOM FRAMEWORK
                                        <p>Do travelling companions contrasted</p>
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        MINIMAL DESIGN
                                        <p>Mistress strongly remember up</p>
                                    </li>
                                </ul>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutUs;