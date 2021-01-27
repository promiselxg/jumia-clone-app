import { Container } from "@material-ui/core";
import "./App.css";
import Header from "./components/Header";
import RightBar from "./components/RightBar";
import SideBar from "./components/SideBar";
import Slider from "./components/Slider";

function App() {
  return (
    <div className='app'>
      <Header />
      <Container style={{ marginTop: "10px" }} className='app__container'>
        <SideBar />
        <Slider />
        <RightBar />
      </Container>
    </div>
  );
}

export default App;
