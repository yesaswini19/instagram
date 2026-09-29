import { useState } from 'react';

function CreatePage() {
  const [preview, setPreview] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="page-shell">
      <header className="page-header">
        <h1>Create</h1>
      </header>

      <div className="create-card">
        <label className="upload-box">
          <input type="file" accept="image/*" onChange={handleFileChange} />
          {preview ? <img src={preview} alt="Preview" /> : <span>Select a photo</span>}
        </label>

        <div className="form-group">
          <label htmlFor="caption">Caption</label>
          <textarea id="caption" rows="4" placeholder="Write a caption..." />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="hashtags">Hashtags</label>
            <input id="hashtags" type="text" placeholder="#sunset #travel" />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input id="location" type="text" placeholder="Add location" />
          </div>
        </div>

        <button type="button" className="primary-button">Share post</button>
      </div>
    </div>
  );
}

export default CreatePage;
