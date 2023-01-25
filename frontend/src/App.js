import './App.css';
import Logo from './components/logo';
import PlayMusic from './components/PlayMusic';
import StartInfo from './components/StartInfo';

function App() {
  return (
    <div >
      <PlayMusic></PlayMusic>
    <Logo/>
    <StartInfo/>
      <p className="text-lg color-red-500 ">Welcome</p>
      <div className="black text-2xl"> To the app component</div>
    </div>
  );
}

export default App;
