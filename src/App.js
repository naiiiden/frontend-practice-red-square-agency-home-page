import "./style/general.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import IdeaSection from "./components/IdeaSection";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Work from "./components/Work";

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <IdeaSection/>
      <Clients/>
      <Footer/>
      <Work/>
    </div>
  )
}

export default App;
