import React from "react";

const SignUp: React.FC<Props> = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-md-7 intro-section-register">
            <div className="brand-wrapper">
              <h1>Join Smash Tennis</h1>
            </div>
            <div className="intro-content-wrapper">
              <h1 className="intro-title">Tennis community</h1>
              <p className="intro-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna
              </p>
              <a href="#!" className="btn btn-read-more">
                Read more
              </a>
            </div>
            <div className="intro-section-footer">
              <nav className="footer-nav">
                <a href="#!">Facebook</a>
                <a href="#!">Twitter</a>
                <a href="#!">Gmail</a>
              </nav>
            </div>
          </div>
          <div className="col-sm-6 col-md-5 form-section">
            <div className="login-wrapper">
              <h2 className="login-title">Sign up</h2>
              <form action="#!">
              <div className="form-group">
                  <label for="name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <label for="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group mb-3">
                  <label for="password" className="sr-only">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group mb-3">
                  <label for="password" className="sr-only">
                    Password confirmation
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    placeholder="Confirm password"
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center mb-5">
                  <input
                    name="login"
                    id="login"
                    className="btn login-btn"
                    type="button"
                    value="Register"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{``}</style>
    </>
  );
};

export default SignUp;
