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
     <div className='pb-4 mx-auto bg-gray-50'> <h2>Add a Video to Your Channel</h2></div>
     <div className='flex pb-4'>
      <div className='text-orange-500 text-bold pr-6'>Enter YouTube Video URL:</div>
      <input className="w-96 h-full border border-black bg-white text-black" type="text" value={videoURL} onChange={handleVideoURLChange} /></div>

    <div className='flex'><div className='pb-4 pr-4'><button className="rounded-lg px-4 md:px-8 xl:px-12 py-1 text-xs md:text-l 2xl:text-xl font-mono text-orange-500 bg-slate-900 bg-opacity-80 
            hover:bg-spot-yellow hover:border-white hover:text-orange-300 hover:bg-opacity-100 duration-300" onClick={generateEmbedCode}>Generate Embed Code</button></div> 
            <div>   <button className="rounded-lg px-4 md:px-8 xl:px-12 py-1 text-xs md:text-l 2xl:text-xl font-mono text-orange-500 bg-slate-900 bg-opacity-80 
            hover:bg-spot-yellow hover:border-white hover:text-orange-300 hover:bg-opacity-100 duration-300" onClick={saveProfile}>Save Profile</button></div></div> 
   
    </div>
  );
}

export default UserProfile;
