import '../css/CharityPage.css';
import Router from "./components/Router"

const charities = [RedCharity, GreenCharity, BlueCharity];

function CharityPage() {
  return (
    <div className="Startup">
        <h1>Hello this is the main page</h1>
        <Router />
    </div >
  );
}

export default CharityPage;
