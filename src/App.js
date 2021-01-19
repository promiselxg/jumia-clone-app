import './App.css'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Slider from './components/Slider'

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
          <h3>Right</h3>
        </div>
      </div>
    </div>
  )
}

export default App
