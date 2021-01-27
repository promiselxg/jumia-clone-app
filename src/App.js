import { Container } from "@material-ui/core";
import "./App.css";
import Header from "./components/Header";
import Offers from "./components/Offers";
import RightBar from "./components/RightBar";
import SideBar from "./components/SideBar";
import Slider from "./components/Slider";

function App() {
  return (
    <div className='app'>
      <Header />
      <Container className='app__container'>
        <SideBar />
        <Slider />
        <RightBar />
      </Container>
      <Container className='app__container'>
        <Offers />
      </Container>
      <Container className='app__container'></Container>
    </div>
  );
}

export default App;
