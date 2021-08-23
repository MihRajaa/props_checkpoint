
import './App.css';
import ProfileComponent from './Profile/ProfileComponent';
import MyImage from './Image/MyImage.jpg'

function App() {

  

  const Data = {
    fullName : 30,
    bio: "................",
    profession: "Informatique"
  }

  const handleName = (name) => {alert(`the user is ${name}`)}
  
  return (
    <div className="App">
      <ProfileComponent data = {Data} handleName= {handleName}>
        <img src={MyImage} style={{height:200, width:200}} alt='' />
      </ProfileComponent>
    </div>
  );
}

export default App;
