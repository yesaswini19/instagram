function LoginPage() {
  return (
    <div className="auth-shell">
      <div className="auth-card">
        <h1>Welcome to Pixora</h1>
        <p>Log in to keep exploring your feed.</p>

        <form className="auth-form">
          <label>
            Email or Username
            <input type="text" placeholder="you@example.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="Enter your password" />
          </label>
          <button type="submit" className="primary-button">Log In</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
