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

      <style jsx>{`
        body {
          background-color: #fff;
          font-family: "Karla", sans-serif;
        }

        .intro-section {
          background-image: url(https://images.unsplash.com/photo-1554068865-24cecd4e34b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80);
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          padding: 75px 95px;
          min-height: 100vh;
          display: -webkit-box;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          flex-direction: column;
          color: #ffffff;
        }
        @media (max-width: 991px) {
          .intro-section {
            padding-left: 50px;
            padding-rigth: 50px;
          }
        }
        @media (max-width: 767px) {
          .intro-section {
            padding: 28px;
          }
        }
        @media (max-width: 575px) {
          .intro-section {
            min-height: auto;
          }
        }

        .brand-wrapper .logo {
          height: 35px;
        }

        @media (max-width: 767px) {
          .brand-wrapper {
            margin-bottom: 35px;
          }
        }

        .intro-content-wrapper {
          width: 410px;
          max-width: 100%;
          margin-top: auto;
          margin-bottom: auto;
        }
        .intro-content-wrapper .intro-title {
          font-size: 40px;
          font-weight: bold;
          margin-bottom: 17px;
        }
        .intro-content-wrapper .intro-text {
          font-size: 19px;
          line-height: 1.37;
        }
        .intro-content-wrapper .btn-read-more {
          background-color: #fff;
          padding: 13px 30px;
          border-radius: 0;
          font-size: 16px;
          font-weight: bold;
          color: #000;
        }
        .intro-content-wrapper .btn-read-more:hover {
          background-color: transparent;
          border: 1px solid #fff;
          color: #fff;
        }

        @media (max-width: 767px) {
          .intro-section-footer {
            margin-top: 35px;
          }
        }

        .intro-section-footer .footer-nav a {
          font-size: 20px;
          font-weight: bold;
          color: inherit;
        }
        @media (max-width: 767px) {
          .intro-section-footer .footer-nav a {
            font-size: 14px;
          }
        }
        .intro-section-footer .footer-nav a + a {
          margin-left: 30px;
        }

        .form-section {
          display: -webkit-box;
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: center;
          justify-content: center;
        }
        @media (max-width: 767px) {
          .form-section {
            padding: 35px;
          }
        }

        .login-wrapper {
          width: 300px;
          max-width: 100%;
        }
        @media (max-width: 575px) {
          .login-wrapper {
            width: 100%;
          }
        }
        .login-wrapper .form-control {
          border: 0;
          border-bottom: 1px solid #e7e7e7;
          border-radius: 0;
          font-size: 14px;
          font-weight: bold;
          padding: 15px 10px;
          margin-bottom: 7px;
        }
        .login-wrapper .form-control::-webkit-input-placeholder {
          color: #b0adad;
        }
        .login-wrapper .form-control::-moz-placeholder {
          color: #b0adad;
        }
        .login-wrapper .form-control:-ms-input-placeholder {
          color: #b0adad;
        }
        .login-wrapper .form-control::-ms-input-placeholder {
          color: #b0adad;
        }
        .login-wrapper .form-control::placeholder {
          color: #b0adad;
        }

        .login-title {
          font-size: 30px;
          font-weight: bold;
          margin-bottom: 30px;
        }

        .login-btn {
          padding: 13px 30px;
          background-color: #000;
          border-radius: 0;
          font-size: 20px;
          font-weight: bold;
          color: #fff;
        }
        .login-btn:hover {
          border: 1px solid #000;
          background-color: transparent;
          color: #000;
        }

        .forgot-password-link {
          font-size: 14px;
          color: #080808;
          text-decoration: underline;
        }

        .social-login-title {
          font-size: 15px;
          color: #919aa3;
          display: -webkit-box;
          display: flex;
          margin-bottom: 23px;
        }
        .social-login-title::before,
        .social-login-title::after {
          content: "";
          background-image: -webkit-gradient(
            linear,
            left top,
            left bottom,
            from(#f4f4f4),
            to(#f4f4f4)
          );
          background-image: linear-gradient(#f4f4f4, #f4f4f4);
          -webkit-box-flex: 1;
          flex-grow: 1;
          background-size: calc(100% - 20px) 1px;
          background-repeat: no-repeat;
        }
        .social-login-title::before {
          background-position: center left;
        }
        .social-login-title::after {
          background-position: center right;
        }

        .social-login-links {
          text-align: center;
          margin-bottom: 32px;
        }

        .social-login-link img {
          width: 40px;
          height: 40px;
          -o-object-fit: contain;
          object-fit: contain;
        }

        .social-login-link + .socia-login-link {
          margin-left: 16px;
        }

        .login-wrapper-footer-text {
          font-size: 14px;
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default SignIn;
