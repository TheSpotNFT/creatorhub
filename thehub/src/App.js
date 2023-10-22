import logo from './logo.svg';
import './index.css';
import UserProfile from './Components/UserProfile';
import VideoPlayer from './Components/Videos';

function App() {
  return (
    <div className="bg-black flex">
      <div className='bg-white w-1/2 h-full border-2 border-black p-8'> <UserProfile/></div>
      <div className='bg-white w-1/2 h-full border-2 border-black p-8'> <VideoPlayer userId="IeUWCqTK6tjOWdd3oKbV" />
</div>
        
    </div>
  );
}

export default App;
