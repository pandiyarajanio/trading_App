const Signin = () => {
  return (
    <div className="forms signin">
      {/* signin */}
      <h4>Sign In</h4>
      <div className="login-form">
        <form>
          <div className="form-group">
            <label>User Name</label>
            <input type="text" className="form-control" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" />
          </div>

          <div className="social-login mb-3">
            <ul>
              <li>
                <input
                  id="reg"
                  className="checkbox-custom"
                  name="reg"
                  type="checkbox"
                />
                <label for="reg" className="checkbox-custom-label">
                  Save Password
                </label>
              </li>
              <li>
                <a href="#" className="theme-cl">
                  Forget Password?
                </a>
              </li>
            </ul>
          </div>

          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary rounded btn-md full-width pop-login"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
