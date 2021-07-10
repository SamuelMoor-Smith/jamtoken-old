import './App.css';
import Charity from './components/Charity'
import NavBar from './components/NavBar/NavBar'
import RedCharity from './charities/redCharity'
import GreenCharity from './charities/greenCharity'
import BlueCharity from './charities/blueCharity';

const charities = [RedCharity, GreenCharity, BlueCharity];

function App() {
  return (
    <div className="Startup">
      <NavBar></NavBar>
      <h1>Which Charity would you like to donate to?</h1>
      <div className="flats">
        {charities.map((charity) => {
          return <Charity {...charity} />
        })}
      </div>
    </div >
  );
}

export default App;
