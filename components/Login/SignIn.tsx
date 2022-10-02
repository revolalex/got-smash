import React from "react";

const SignIn: React.FC<Props> = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-md-7 intro-section">
            <div className="brand-wrapper">
              <h1>Logo</h1>
            </div>
            <div className="intro-content-wrapper">
              <h1 className="intro-title">Welcome to website !</h1>
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
              <h2 className="login-title">Sign in</h2>
              <form action="#!">
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
                <div className="d-flex justify-content-between align-items-center mb-5">
                  <input
                    name="login"
                    id="login"
                    className="btn login-btn"
                    type="button"
                    value="Login"
                  />
                  <a href="#!" className="forgot-password-link">
                    Password?
                  </a>
                </div>
              </form>
              <p className="login-wrapper-footer-text">
                Need an account?{" "}
                <a href="/register" className="text-reset">
                  Signup here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{``}</style>
    </>
  );
};

export default SignIn;
