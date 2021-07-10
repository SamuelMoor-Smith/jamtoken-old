import '../css/CharityPage.css';
import Charity from '../components/Charity'
import NavBar from '../components/NavBar/NavBar'
import RedCharity from '../charities/redCharity'
import GreenCharity from '../charities/greenCharity'
import BlueCharity from '../charities/blueCharity';

const charities = [RedCharity, GreenCharity, BlueCharity];

function CharityPage() {
  return (
    <div className="Startup">
      <NavBar></NavBar>
      <h1>This is the stake page</h1>
    </div >
  );
}

export default CharityPage;
