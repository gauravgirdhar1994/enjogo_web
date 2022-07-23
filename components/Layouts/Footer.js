import React, { Component } from "react";
import Link from "next/link";

class Footer extends Component {
  render() {
    let currentYear = new Date().getFullYear();
    return (
      <>
        {/* Top Footer Section */}
        <footer className="footer-section ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-footer-widget">
                  <div className="footer-heading">
                    <h3>About Us</h3>
                  </div>
                  <p>
                    enJogo is a game. Game of a game. Also known as The
                    Beautiful Game. There are tasks to be done. And rewards to
                    be won. For working out. And playing hard. At home or on the
                    pitch. But the biggest reward of them all would be to see
                    "Pro" against your name.
                  </p>

                  <ul className="footer-social">
                    <li>
                      <Link href="https://m.facebook.com/enJogo/">
                        <a target="_blank">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </Link>
                    </li>

                    <li>
                      <Link href="https://mobile.twitter.com/enJogo_?lang=en">
                        <a target="_blank">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </Link>
                    </li>

                    <li>
                      <Link href="https://www.instagram.com/enJogo/">
                        <a target="_blank">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </Link>
                    </li>

                    <li>
                      <Link href="https://www.linkedin.com/company/enJogo/">
                        <a target="_blank">
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="offset-lg-1 col-lg-4 col-md-6 col-sm-6">
                <div className="single-footer-widget">
                  <div className="footer-heading">
                    <h3>Important Links</h3>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="footer-quick-links">
                        <li>
                          <Link href="/terms-condition">
                            <a>Terms and Conditions</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/privacy-policy">
                            <a>Privacy Policy</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/refund-cancellation-policy">
                            <a>Refund Cancellation Policy</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* <div className="col-md-6">
                  <ul className="footer-quick-links">
                    <li>
                      <Link href="#">
                        <a>Terms and Conditions</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Refund Policy</a>
                      </Link>
                    </li>
                  </ul>
                  </div> */}
                  </div>
                </div>
              </div>

              <div className="col-lg-2 offset-lg-1 col-md-6 col-sm-6 text-right d-sm-block d-none">
                <div className="single-footer-widget">
                  <div className="footer-heading">
                    <h3>Download App</h3>
                  </div>

                  <div className="col-md-12">
                    <a
                      target="_blank"
                      href="https://play.google.com/store/apps/details?id=com.bbfs.parent&gl=US"
                    >
                      <img
                        style={{ float: "right", margin: "20px 0" }}
                        src="/images/play_store_button.svg"
                      />
                    </a>
                    <a
                      target="_blank"
                      href="https://apps.apple.com/in/app/enJogo/id1484241127"
                    >
                      <img
                        style={{ float: "right" }}
                        src="/images/app_store_button.svg"
                      />
                    </a>
                    <Link
                      target="_blank"
                      href="https://www.enJogo.com/newsletter/"
                      activeClassName="active"
                    >
                      <img
                        style={{ cursor: "pointer", marginTop : '40px', paddingTop: '20px', borderTop : '1px solid #3c4350' }}
                        src="/images/blog_logo.png"
                        width={200}
                        className="white-logo"
                        alt="logo"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="container d-block d-sm-none"
            style={{
              position: "fixed",
              bottom: 0,
              background: "#212121",
              width: "100%",
              padding: "10px 0",
            }}
          >
            <div className="row">
              <div className="col-3">
                <img
                  src="/images/logo-white.png"
                  width={200}
                  style={{ marginTop: "20px", marginLeft: "15%" }}
                  className="white-logo"
                  alt="logo"
                />
              </div>
              <div className="col-5">
                <p style={{ fontSize: "12px", color: "#fff" }}>
                  Get access to community, challenges and more on the app.
                </p>
              </div>
              <div className="col-4">
                <a
                  style={{ marginTop: "20px" }}
                  className="btn btn-white bg-white"
                  href="https://play.google.com/store/apps/details?id=com.bbfs.parent&gl=US"
                  target="_blank"
                >
                  Get App
                </a>
              </div>
            </div>
          </div>
        </footer>
        {/* End Top Footer Section */}

        {/* Bottom Footer Section */}
        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 col-md-12 align-items-center text-center">
                <p>
                  &copy; {currentYear} All Rights Reserved by
                  <a href="#" target="_blank">
                    Talisman
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* End Bottom Footer Section */}
      </>
    );
  }
}

export default Footer;
