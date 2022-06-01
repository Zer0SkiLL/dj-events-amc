import {React, useState, useContext} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '@layout/Layout';
import AuthContext from '@context/AuthContext';


const Login = () => {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { login, error } = useContext(AuthContext);

    // useEffect(() => {
    //     error && toast.error(error);
    // });

    const handleSubmit = (e) => {
        e.preventDefault();
        login({ email, password });
    };
    
  return (
      <section
        className="sign-up-in-section bg-dark ptb-60"
        style={{
          background: "url('/page-header-bg.svg')no-repeat right bottom",
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-5 col-md-8 col-12">
              <Link href="/">
                <a className="mb-5 d-xl-block d-lg-block text-center">
                  <Image
                    width={113}
                    height={36}
                    src="/logo-white.png"
                    alt="logo"
                    className="img-fluid"
                  />
                </a>
              </Link>
              <div className="register-wrap p-5 bg-light shadow rounded-custom">
                <h1 className="h3">Nice to Seeing You Again</h1>

                <div className="position-relative d-flex align-items-center justify-content-center mt-4 py-4">
                  <span className="divider-bar"></span>
                  <h6 className="position-absolute text-center divider-text bg-light mb-0">
                    Or
                  </h6>
                </div>
                <form action="#" onSubmit={handleSubmit} className="mt-4 register-form">
                  <div className="row">
                    <div className="col-sm-12">
                      <label htmlFor="email" className="mb-1">
                        Email <span className="text-danger">*</span>
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          id="email"
                          required
                          aria-label="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <label htmlFor="password" className="mb-1">
                        Password <span className="text-danger">*</span>
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          id="password"
                          required
                          aria-label="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-primary mt-3 d-block w-100"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                  <p className="font-monospace fw-medium text-center text-muted mt-3 pt-4 mb-0">
                    Don’t have an account?{' '}
                    <Link href="/register">
                      <a className="text-decoration-none">Sign up Today</a>
                    </Link>
                    <br />
                    <Link href="/password-reset">
                      <a className="text-decoration-none">Forgot password</a>
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Login;