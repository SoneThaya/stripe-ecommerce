import React from "react";
import Layout from "./shared/Layout";
import pageNotFound from "../assets/pageNotFound.png";

const NotFound = ({ history }) => {
  //   const style = {
  //     fontWeight: "bold",
  //     textAlign: "center",
  //   };

  return (
    <Layout>
      <div>
        <h1>Page Not Found</h1>
        <img src={pageNotFound} alt="page not found" />
        <button
          className="btn my-3"
          onClick={() => history.goBack()}
          variant="danger"
        >
          Go Back
        </button>
      </div>
    </Layout>
  );
};

export default NotFound;
