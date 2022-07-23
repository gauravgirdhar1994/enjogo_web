import React, { Component } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { faBook, faCogs, faGraduationCap, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const OwlCarousel = dynamic(import("react-owl-carousel3"));


const options = {
  loop: false,
  nav: false,
  dots: true,
  autoplayHoverPause: true,
  autoplay: true,
  margin: 30,
  navText: [
    "<i class='flaticon-left-chevron'></i>",
    "<i class='flaticon-right-chevron'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 3,
    },
    768: {
      items: 3,
    },
    1200: {
      items: 3,
    },
  },
};

class Products extends Component {
  _isMounted = false;
  state = {
    display: false,
  };
  componentDidMount() {
    this._isMounted = true;
    this.setState({ display: true });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <section className="partner-area pb-100" id="products">
        <div className="container">
        <div className="section-title">
            <span>WE OFFER MORE</span>
            <h2>Check Out Our Other Products</h2>
          </div>
          {this.state.display ? (
            <OwlCarousel
              className="partner-slider owl-carousel owl-theme"
              {...options}
            >
              <div className="partner-item">
                <div className="single-services-box-product">
                  <div className="icon">
                    <FontAwesomeIcon icon={faSearch} />
                  </div>
                  <span className="number">1</span>
                  <h3>Looking for a football academy for your child?</h3>
                  <p>
                    Join a non-residential, neighborhood football center run by
                    India’s largest and most rated football academy.
                  </p>
                  <div class="tab-btn" style={{marginTop : '20px'}}><a class="default-btn" href="https://www.bbfootballschools.com/foundation-training/gurgaon">Explore <span></span></a></div>
                </div>
              </div>

              <div className="partner-item">
                <div className="single-services-box-product">
                  <div className="icon">
                    <FontAwesomeIcon icon={faGraduationCap} />
                  </div>
                  <span className="number">2</span>
                  <h3>Play hard. Study hard.</h3>
                  <p>
                    Explore our residential academies where you do not have to
                    compromise between studies and your favorite sport. Receive
                    elite sports coaching alongside mainstream academics
                    (CBSE/ICSE curriculum).
                  </p>
                  <div class="tab-btn" style={{marginTop : '20px'}}><a class="default-btn" href="https://www.bbfootballschools.com/residential-academy">Explore <span></span></a></div>
                </div>
              </div>

              <div className="partner-item">
                <div className="single-services-box-product">
                  <div className="icon">
                    <FontAwesomeIcon icon={faCogs} />
                  </div>
                  <span className="number">3</span>
                  <h3>Looking for a cricket academy for your child?</h3>
                  <img src="images/coming-soon.png" style={{marginTop : '15%'}}/>
                </div>
              </div>

              <div className="partner-item">
                <div className="single-services-box-product">
                  <div className="icon">
                    <FontAwesomeIcon icon={faBook} />
                  </div>
                  <span className="number">4</span>
                  <h3>Become a great coach, nurture future players</h3>
                  <p>
                    enJogo regularly conducts intense cohort-based courses for
                    coaches across all levels. Guaranteed internship
                    opportunities and job assistance.
                  </p>
                  <div class="tab-btn" style={{marginTop : '20px'}}><a class="default-btn" href="https://www.instagram.com/p/CgCKK4qvU06/">Explore <span></span></a></div>
                </div>
              </div>
            </OwlCarousel>
          ) : (
            ""
          )}
        </div>
      </section>
    );
  }
}

export default Products;
