import './App.css'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Slider from './components/Slider'
import RightBar from './components/RightBar'
import AppOffers from './components/AppOffers'
import Topselling from './components/Topselling'

function App() {
  return (
    <div className='app'>
      <Header />
      <div className='app__body'>
        <SideBar />
        <div className='app__slide'>
          <Slider />
        </div>
        <div className='app__right'>
          <RightBar />
        </div>
      </div>
      <div className='app__offer'>
        <AppOffers />
      </div>

      <div className='app__topSelling'>
        <Topselling />
      </div>
    </div>
  )
}

export default App
