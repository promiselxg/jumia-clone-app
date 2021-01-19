import './App.css'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Slider from './components/Slider'
import RightBar from './components/RightBar'

import Offers from './components/Offers'

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
        <Offers />
        <Offers />
        <Offers />
        <Offers />
      </div>
    </div>
  )
}

export default App
