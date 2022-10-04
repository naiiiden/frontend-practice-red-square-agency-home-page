import "./style/general.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import IdeaSection from "./components/IdeaSection";
import Clients from "./components/Clients";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <IdeaSection/>
      <Clients/>
      <Footer/>
    </div>
  )
}

export default App;
