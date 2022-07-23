import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import RefundCancellationPolicyContent from '../components/RefundCancellationPolicy/RefundCancellationPolicyContent';
import Footer from '../components/Layouts/Footer';

class RefundCancellationPolicy extends Component {
    render() {
        return (
            <>
                <Navbar />

                {/* <PageBanner
                    pageTitle="Refund Cancellation Policy" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Refund Cancellation Policy" 
                    breadcrumbUrl="/" 
                    bgImage="banner-bg-img5"
                /> */}

                <RefundCancellationPolicyContent />
                
                <Footer />
            </>
        );
    }
}

export default RefundCancellationPolicy;