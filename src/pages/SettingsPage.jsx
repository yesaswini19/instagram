function SettingsPage() {
  return (
    <div className="page-shell">
      <header className="page-header">
        <h1>Settings</h1>
      </header>

      <div className="settings-card">
        <div className="form-group">
          <label htmlFor="name">Display name</label>
          <input id="name" type="text" defaultValue="Mila Rose" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" defaultValue="mila@example.com" />
        </div>
        <div className="form-group">
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" rows="3" defaultValue="Photographer • Traveler • Coffee lover" />
        </div>
        <button type="button" className="primary-button">Save changes</button>
      </div>
    </div>
  );
}

export default SettingsPage;
