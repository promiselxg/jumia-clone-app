import { Container } from "@material-ui/core";
import "./App.css";
import Header from "./components/Header";
import Offers from "./components/Offers";
import RightBar from "./components/RightBar";
import SideBar from "./components/SideBar";
import Slider from "./components/Slider";
import Products from "./components/Products";

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
      <Container className='app__container'>
        <Products />
      </Container>
      <Container className='app__container'>
        <Products
          text='Deals of the Day | From ₦1,000'
          color='red'
          category='todayDeals'
        />
      </Container>
      <Container className='app__container'>
        <Products
          text='Jumia Global Festival | Everything Below ₦5,000'
          color='gray'
          category='jumia_festival'
        />
      </Container>
      <Container className='app__container'>
        <Products
          text='Mobile Accessories | Use code APPYMACC to get Extra 8% Off'
          color='blue'
          category='scent'
        />
      </Container>
    </div>
  );
}

export default App;
