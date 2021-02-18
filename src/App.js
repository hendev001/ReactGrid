import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import LandingPage from "./components/landingPage/LandingPage";

function App() {
  return (
    <>
      <Header />
    <div className="container">
      <LandingPage/>

    </div>
    </>
  );
}

export default App;
