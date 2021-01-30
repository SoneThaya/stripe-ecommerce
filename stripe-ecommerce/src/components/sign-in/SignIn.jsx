import React, { useState } from "react";
import Layout from "../shared/Layout";
import { Formik } from "formik";
import { withRouter } from "react-router-dom";
import { auth } from "../../firebase";
import "../sign-up/signUp.styles.scss";

const SignIn = ({ history: { push } }) => {
  const [error, setError] = useState(null);

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSignIn = async (values, { setSubmitting }) => {
    const { email, password } = values;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setSubmitting(false);
      push("/shop");
    } catch (error) {
      console.log(error);
      setSubmitting(false);
      setError(error);
    }
  };

  return (
    <Layout>
      <h1>Sign In</h1>
      <div className="form-container">
        <Formik initialValues={initialValues} onSubmit={handleSignIn}>
          {(values, handleChange, handleSubmit, isSubmitting) => {
            return (
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    placeholder="Email"
                    className="nomad-input"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                    placeholder="Password"
                    className="nomad-input"
                  />
                </div>
                <div className="submit-btn">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="button is-black nomad-btn submit"
                  >
                    Sign In
                  </button>
                </div>
                <div className="error-message">
                  {error && <p>{error.message}</p>}
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    </Layout>
  );
};

export default withRouter(SignIn);
