import React from "react";

const Login = ({ className, title }) => (
  <div className="flat-card is-auto is-auth-form">
    <div
      className={className}
    />
    <button className="button rounded big-button">{title}</button>
  </div>
);

export default Login;
