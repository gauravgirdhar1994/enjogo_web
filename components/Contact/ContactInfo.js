import React, { Component } from 'react';

class ContactInfo extends Component {
    render() {
        return (
            <div className="contact-box pt-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-14">
                            <div className="single-contact-box">
                                <i className="fa fa-map-marker"></i>
                                <div className="content-title">
                                    <h3>Address</h3>
                                    <p>Plot no. 382, 3rd Floor, 100 ft Road, Ghitorni, <br/>Delhi - 110030</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-4">
                            <div className="single-contact-box">
                                <i className="fa fa-envelope"></i>
                                <div className="content-title">
                                    <h3>Email</h3>
                                    <p>info@bbfootballschools.com</p>
                                    <p>hello@enJogo.com</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-4">
                            <div className="single-contact-box">
                                <i className="fa fa-phone"></i>
                                <div className="content-title">
                                    <h3>Call Us</h3>
                                    <p>+91-8448020010</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactInfo;