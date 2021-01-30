import React from "react";
import Layout from "../shared/Layout";
import { Formik } from "formik";
import "../sign-up/signUp.styles.scss";

const SignIn = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <Layout>
      <h1>Sign In</h1>
      <div className="form-container">
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
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
              </form>
            );
          }}
        </Formik>
      </div>
    </Layout>
  );
};

export default SignIn;
