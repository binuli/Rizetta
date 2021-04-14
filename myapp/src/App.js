import "./App.scss"

// importing components
import Navbar from "./components/Navbar/navbar"
import ProfDetails from "./components/Prof-details/prof-details"
import Body from './components/Body/body'

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar/>
      {/* profie details */}
      <ProfDetails/>
      {/* Body-text */}
      <Body/>
    </div>
  );
}

export default App;
