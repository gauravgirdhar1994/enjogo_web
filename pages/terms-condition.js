import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import TermsConditionContent from '../components/TermsCondition/TermsConditionContent';
import Footer from '../components/Layouts/Footer';

class TermsCondition extends Component {
    render() {
        return (
            <>
                <Navbar />

                <TermsConditionContent />
                
                <Footer />
            </>
        );
    }
}

export default TermsCondition;