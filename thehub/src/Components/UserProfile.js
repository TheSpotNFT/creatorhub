import React, { useState } from 'react';

function UserProfile() {
  const [videoURL, setVideoURL] = useState('');
  const [embedCode, setEmbedCode] = useState('');

  const handleVideoURLChange = (e) => {
    setVideoURL(e.target.value);
  };

  const generateEmbedCode = () => {
    const generateEmbedCode = async () => {
      try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAfPGKO06QMuM3pht8wgiPlFa0t5bNil7g&part=player&id=VIDEO_ID`);
        const data = await response.json();
        const embedCode = data.items[0].player.embedHtml;
        setEmbedCode(embedCode);
      } catch (error) {
        console.error('Error fetching embed code: ', error);
      }
    };    
  };

  const saveProfile = () => {
    // Implement logic to save the video URL and embed code to the user's profile.
    // You may interact with your smart contract or backend for this.
  };



  return (
    <div>
      <h2>User Profile</h2>
      <label>YouTube Video URL:</label>
      <input type="text" value={videoURL} onChange={handleVideoURLChange} />
      <button onClick={generateEmbedCode}>Generate Embed Code</button>
      <button onClick={saveProfile}>Save Profile</button>
    </div>
  );
}

export default UserProfile;
