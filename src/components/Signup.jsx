const Signup = () => {
  return (
    <div className="forms signup">
      <h4>Sign Up</h4>
      <div className="login-form">
        <form>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" />
          </div>

          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary btn-md full-width pop-login"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
