import React, { Component } from "react";
import Link from "next/link";
import ScrollAnimation from "react-animate-on-scroll";

class MainBanner extends Component {
  render() {
    return (
      <div className="main-banner-two">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-12 col-md-12">
                  <div className="main-banner-content">
                    <h1>enJogo - The Sports Learning App</h1>
                    <p>
                      We are India’s first full-stack sports learning platform,
                      providing seamless online/offline sports training for 5 to
                      50-year olds.
                    </p>

                    <div className="banner-btn">
                      <Link target="_blank" href="https://play.google.com/store/apps/details?id=com.bbfs.parent&gl=US">
                        <a target="_blank" className="default-btn-one">
                          Download Playstore
                          <span></span>
                        </a>
                      </Link>

                      <Link target="_blank" href="https://apps.apple.com/in/app/enJogo/id1484241127">
                        <a target="_blank" className="default-btn" href="https://apps.apple.com/in/app/enJogo/id1484241127">
                          Download IOS
                          <span></span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* <div className="col-lg-6 col-md-12">
                  <div className="banner-image text-center">

                    <img
                      style={{height : "300px"}}
                      src="/images/main-banner-shape/main-banner-image.png"
                      alt="image"
                    />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="creative-shape">
          <img src="/images/shape/waves-shape-2.svg" alt="main-image" />
        </div> */}
        {/* <div className="shape-dot">
          <img
            src="/images/main-banner-shape/main-banner-dot.png"
            alt="main-image"
          />
        </div> */}
      </div>
    );
  }
}

export default MainBanner;
