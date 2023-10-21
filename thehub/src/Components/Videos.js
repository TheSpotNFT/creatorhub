import React, { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, get } from "firebase/database"; // Import the database module

const VideoPlayer = ({ username, address }) => {
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyAA5-Qa5UJ3b0S6pAs3E7OCaG-TwR5Vvig",
      authDomain: "thehub-8af08.firebaseapp.com",
      projectId: "thehub-8af08",
      storageBucket: "thehub-8af08.appspot.com",
      messagingSenderId: "429824717981",
      appId: "1:429824717981:web:0b9587dfd24b273b38d074",
      measurementId: "G-6Q459P9J5Z"
    };

    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    // Use the getDatabase function to initialize the database
    const database = getDatabase();

    // Use the ref function to create a reference to the Firebase database path
    const videosRef = ref(database, `videos/${address}`);

    get(videosRef).then((snapshot) => {
      if (snapshot.exists()) {
        setVideoData(snapshot.val());
      } else {
        setVideoData(null); // No video found for the provided username
      }
    });

    return () => {
      // No need to explicitly call off() for read operations
    };
  }, [address]);

  return (
    <div>
      {videoData ? (
        <div>
          <h3>{username}'s Video</h3>
          <iframe
            width="560"
            height="315"
            src={videoData}
            title="Embedded Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <p>No video found for {username}</p>
      )}
    </div>
  );
};

export default VideoPlayer;
