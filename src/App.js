import "./style/general.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import IdeaSection from "./components/IdeaSection";
import Clients from "./components/Clients";

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <IdeaSection/>
      <Clients/>
    </div>
  )
}

export default App;
