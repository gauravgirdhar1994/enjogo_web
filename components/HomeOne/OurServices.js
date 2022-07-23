import React, { Component } from "react";
import Link from "next/link";

class OurServices extends Component {
  render() {
    return (
      <section className="services-section pb-100" id="features">
        <div className="container">
          <div className="section-title">
            <span>OUR FEATURES</span>
            <h2>Check Out Our Latest Features</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-big-data"></i>
                </div>

                <h3>Train Online</h3>
                <p>
                  Our online content and workouts help you to develop your
                  skills, fitness and knowledge of the game anytime and
                  anywhere.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-data-analytics"></i>
                </div>

                <h3>Train On The Field</h3>
                <p>
                  Find and join the nearest academy and get instant feedback on
                  each of your onfield training sessions - in the palm of your
                  hand.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-document"></i>
                </div>
                <h3>Get Rewarded</h3>
                <p>
                  enJogo records every activity in your sporting journey and
                  rewards you with enJogo Skill Points (eSP).
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-chart"></i>
                </div>
                <h3>Track Progress</h3>
                <p>
                  Get a 100% transparent summary of your curriculum and progress
                  so you know which areas to work upon.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-science"></i>
                </div>
                <h3>Compete And Compare</h3>
                <p>
                  Join a 15k+ strong community and play in the enJogo Leagues.
                  Get promoted or relegated every week, based on your efforts.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-data-management"></i>
                </div>
                <h3>Manage Subscription</h3>
                <p>
                  Manage your subscription plans seamlessly with instant updates
                  and a variety of payment options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default OurServices;
