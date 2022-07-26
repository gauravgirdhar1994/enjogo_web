import React, { Component } from "react";
import Link from "../../utils/ActiveLink";

class Navbar extends Component {
  // Navbar
  _isMounted = false;
  state = {
    display: false,
    collapsed: true,
  };
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  componentDidMount() {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

    return (
      <>
        <div id="navbar" className="navbar-area">
          <div className="main-nav">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <Link href="/">
                  <a className="navbar-brand">
                    <img
                      src="/images/logo-black.png"
                      width={200}
                      className="white-logo"
                      alt="logo"
                    />
                    <img
                      src="/images/logo-black.png"
                      width={200}
                      className="black-logo"
                      alt="logo"
                    />
                  </a>
                </Link>

                <button
                  onClick={this.toggleNavbar}
                  className={classTwo}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar top-bar"></span>
                  <span className="icon-bar middle-bar"></span>
                  <span className="icon-bar bottom-bar"></span>
                </button>

                <div className={classOne} id="navbarSupportedContent">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a href="/" className="nav-link">
                        Home
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="/#about-us" className="nav-link">
                        Why us
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="/#features" className="nav-link">
                        Features
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="/#products" className="nav-link">
                        Products
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="/#blog" className="nav-link">
                        Blog
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="/#contact" className="nav-link">
                        Contact Us
                      </a>
                    </li>

                    <li className="nav-item">
                      <Link
                        target="_blank"
                        href="https://www.enJogo.com/newsletter/"
                        activeClassName="active"
                      >
                        <img
                          style={{ cursor: "pointer" }}
                          src="/images/blog_logo.png"
                          width={200}
                          className="white-logo"
                          alt="logo"
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
