import './App.css';
import Navbar from "./components/universal/MainNavbar"
import MainJumbotron from "./components/homepage/MainJumbotron"
import MainGallery from "./components/homepage/MainGallery"

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainJumbotron />
      <MainGallery />

    </div>
  );
}

export default App;
