import './App.css'
import Header from './components/Header'
import SideBar from './components/SideBar'

function App() {
  return (
    <div className='app'>
      <Header />
      <div className='app__body'>
        <SideBar />
        <div className='app__slide'>
          <h3>OK</h3>
        </div>
      </div>
    </div>
  )
}

export default App
