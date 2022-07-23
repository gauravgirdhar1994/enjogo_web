import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/HomeOne/MainBanner';
import OurServices from '../components/HomeOne/OurServices';
import AboutUs from '../components/HomeOne/AboutUs';
import Testimonial from '../components/Common/Testimonial';
import GetStartedProject from '../components/Common/GetStartedProject';
import BlogPost from '../components/Common/BlogPost';
import FaqContent from '../components/Faq/FaqContent';
import ContactForm from '../components/Contact/ContactForm';
import Footer from '../components/Layouts/Footer';
import Products from '../components/Common/Products';

class Index extends Component {
    constructor(props){
        super(props);
        this.state = { blogPosts: [] };
    }

    componentDidMount(){
        this.callAPI();
    }

    callAPI = async () => {
		try {
			const res = await fetch(
				`https://www.enJogo.com/newsletter/wp-json/wp/v2/posts?page=1&_embed`
			);
			const data = await res.json();
            this.setState({
                blogPosts : data
            })
		} catch (err) {
			console.log(err);
		}
	};

    render() {
        return (
            <>
                <Navbar />

                <MainBanner />

                <AboutUs />

                <OurServices />

                <Products/>

                {/* <Testimonial /> */}

                <FaqContent />

                {this.state.blogPosts.length > 0 && <BlogPost blogPosts={this.state.blogPosts} />}

                <ContactForm />
                
                <Footer />
            </>
        );
    }
}

export default Index;