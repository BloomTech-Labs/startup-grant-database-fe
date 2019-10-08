import React from "react";
import Auth0Lock from "auth0-lock"
import { loginStyles } from "../styles/loginStyles";

const LoginForm = () => {


  
  const styles = loginStyles();

  return (
    <div>
      <main className="ulp-outer">
        <section className="ulp-box   ">
          <div className="ulp-box-inner">
            <div className="ulp-main">
              <header className="ulp-header">
                <img
                  className="header-logo"
                  id="prompt-logo-center"
                  src="https://cdn.pixabay.com/photo/2018/08/18/12/01/money-3614661_960_720.png"
                  alt="Welcome"
                />

                <h1 className="header-title">Welcome</h1>

                <p className="text-simple">Enter email and password</p>
              </header>

              <div className="ulp-container">
                <form method="POST" className="ulp-db">
                  <input
                    type="hidden"
                    name="state"
                    value="g6Fo2SBUaDN0dUxFMUhfVnFJcjFRaXdtS29vZTNoNkg2YU5FWaN0aWTZIDdoZ0M3T3NLNVVUVzhVNDViYkZwM09kQ295OGVIQzV2o2NpZNkgRjdJUTA3RG1VTVdWbnFLRTBEMzRsSng2N3ZBZDNhMmU"
                  />

                  <div className="ulp-fieldset-container">
                    <fieldset className="ulp-input-group">
                      <div
                        className="input-container email"
                        data-action-text=""
                        data-alternate-action-text=""
                      >
                        <label for="username">username</label>

                        <input
                          className="input"
                          name="username"
                          id="username"
                          placeholder="Email address"
                          type="email"
                          value=""
                          required=""
                          autofocus=""
                        />
                      </div>

                      <div
                        className="input-container password" 
        
                        data-action-text=""
                        data-alternate-action-text=""
                      >
                        <label for="password">password</label>

                        <input
                          className="input"
                          name="password"
                          id="password"
                          placeholder="Password"
                          type="password"
                          required=""
                        />
                      </div>
                    </fieldset>
                  </div>

                  <p
                    className="ulp-forgot-password-link"
                    className={styles.forgot}
                  >
                    <a
                      className="link"
                      href="/u/reset-password/request/Username-Password-Authentication?state=g6Fo2SBUaDN0dUxFMUhfVnFJcjFRaXdtS29vZTNoNkg2YU5FWaN0aWTZIDdoZ0M3T3NLNVVUVzhVNDViYkZwM09kQ295OGVIQzV2o2NpZNkgRjdJUTA3RG1VTVdWbnFLRTBEMzRsSng2N3ZBZDNhMmU"
                    >
                      Forgot password?
                    </a>
                  </p>

                  <div className="button-bar">
                    <button
                      type="submit"
                      name="action"
                      value="default"
                      className={styles.cta}
                    >
                      Continue
                    </button>
                  </div>
                </form>

                <div className="ulp-vertical-separator">
                  <span>Or</span>
                </div>

                <div className="ulp-social-providers">
                  <form method="post" className="idp-social-button-container">
                    <input
                      type="hidden"
                      name="state"
                      value="g6Fo2SBUaDN0dUxFMUhfVnFJcjFRaXdtS29vZTNoNkg2YU5FWaN0aWTZIDdoZ0M3T3NLNVVUVzhVNDViYkZwM09kQ295OGVIQzV2o2NpZNkgRjdJUTA3RG1VTVdWbnFLRTBEMzRsSng2N3ZBZDNhMmU"
                    />

                    <input
                      type="hidden"
                      name="connection"
                      value="google-oauth2"
                    />

                    <button
                      type="submit"
                      className={styles.google}
                      data-provider="google"
                    >
                      {/* <span className="idp-icon" data-provider="google"></span> */}

                      <span className="idp-text">Continue with Google</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="ulp-footer">
              <div>
                Don't have an account?
                <a
                  className="link"
                  href="/u/signup?state=g6Fo2SBUaDN0dUxFMUhfVnFJcjFRaXdtS29vZTNoNkg2YU5FWaN0aWTZIDdoZ0M3T3NLNVVUVzhVNDViYkZwM09kQ295OGVIQzV2o2NpZNkgRjdJUTA3RG1VTVdWbnFLRTBEMzRsSng2N3ZBZDNhMmU"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LoginForm;
