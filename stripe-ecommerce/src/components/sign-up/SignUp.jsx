import React from "react";
import Layout from "../shared/Layout";
import { Formik } from "formik";

import "./signUp.styles.scss";

const SignUp = () => {
  const initialValues = {
    firstname: "",
    email: "",
    password: "",
  };

  return (
    <Layout>
      <div className="sign-up">
        <h1>Sign Up</h1>
        <div className="form-container">
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ values, errors, handleChange, handleSubmit, isSubmitting }) => {
              const { firstname, email, password } = errors;
              return (
                <form onSubmit={handleSubmit}>
                  <div>
                    <input
                      type="text"
                      name="firstname"
                      onChange={handleChange}
                      value={values.firstname}
                      placeholder="First Name"
                      className={"nomad-input " + (firstname ? "error" : "")}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      value={values.email}
                      placeholder="Email"
                      className={"nomad-input " + (email ? "error" : "")}
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      value={values.password}
                      placeholder="Password"
                      className={"nomad-input " + (password ? "error" : "")}
                    />
                  </div>
                  <div className="submit-btn">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="button is-black nomad-btn submit"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
