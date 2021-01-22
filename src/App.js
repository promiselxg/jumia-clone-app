import './App.css'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Slider from './components/Slider'
import RightBar from './components/RightBar'
import AppOffers from './components/AppOffers'
import Topselling from './components/Topselling'
import Collections from './components/Collections'

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

      <div className='app__products'>
        <Topselling />
      </div>
      <div className='app__products'>
        <Topselling text='Deals of the Day | From ₦1,000' color='red' />
      </div>
      <div className='app__products'>
        <Topselling
          text='A Trail of Sweet Scents | Up to 60% Off'
          color='blue'
        />
      </div>
      <div className='app__collections'>
        <Collections />
      </div>
    </div>
  )
}

export default App
