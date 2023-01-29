import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile.js' ;
import photo from './Pic.jpg' ;

function App() {

  const fullName = "KOUSSAY CHERIH" ;
  const bio = "Technicien supérieur en techniques du commerce international chargé au montage des dossiers de dédouanement et vérification de leur conformité par rapport aux réglementations en matière de transit international" ;
  const profession = "Transit Agent" ;
  const styleImg = {width :'200px', heigth :'300px'}
  const alertMe = (x) => {
    alert(x)
  }

  return (
    <div className="App">


      <Profile alertMe={alertMe} fullName={fullName} bio={bio} profession={profession}> 

       <img src={photo} alt='mee' style={styleImg} ></img>  
      
       </Profile>


    </div>
  );
}

export default App;
