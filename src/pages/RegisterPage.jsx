function RegisterPage() {
  return (
    <div className="auth-shell">
      <div className="auth-card">
        <h1>Create account</h1>
        <p>Join Pixora and start sharing moments.</p>

        <form className="auth-form">
          <label>
            Full name
            <input type="text" placeholder="Jane Doe" />
          </label>
          <label>
            Username
            <input type="text" placeholder="jane.doe" />
          </label>
          <label>
            Email
            <input type="email" placeholder="jane@example.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="Choose a password" />
          </label>
          <button type="submit" className="primary-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
