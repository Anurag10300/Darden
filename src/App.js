import logo from './logo.svg';
import './App.css';
import Navibar from "./molecules/navbar"
import { mockLinks } from "./content/mockLinks"


function App() {
  return (
    <>

      <Navibar br={logo} st={{ width: "139px", height: "37px" }} clsnm="light" vrnt="" 
      links={{ mockLinks }} droptitle="All Concepts" userBtn="Logout"  />

    </>
  )
}

export default App;
