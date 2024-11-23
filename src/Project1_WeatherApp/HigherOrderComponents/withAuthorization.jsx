import React from "react";

const withAuthorization = (Component) => {
  return (props)=>{
    const isAuthenticated = true; // Replace with actual authentication logic

    if (!isAuthenticated) {
      return <p>You must be logged in to view this content.</p>;
    }

    return <Component {...props} />;
  }
};

export default withAuthorization;
