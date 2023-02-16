import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from './Profile/Profile';



function App() {
  return (
    <div className='App'>
      <Profile
      fullName='RHOLLY'
      bio='Techie'
      profession='Software-developer'>
      handleName={(name) => alert(`Hello, my name is ${name}`)}
      </Profile>
    </div>
     
  );
}

export default App;
