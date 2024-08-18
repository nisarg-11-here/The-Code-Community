// import React from "react";

function Login() {
  return (
    <div className="container">
      <form className="border border-dark rounded-4 p-3 m-2 form-dark w-100">
        <h4 className="mb-4">Login</h4>
        <hr className="w-50 m-auto p-3"/>
        <div className="form-group mb-3 text-start ">
          <label
            htmlFor="exampleInputEmail1"
            className=" h6"
          >
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group mb-3 text-start">
          <label htmlFor="exampleInputPassword1" className="h6">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
