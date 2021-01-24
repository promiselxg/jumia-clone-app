import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <div className='app__container'>
          <Route path='/' component={HomeScreen} exact />
        </div>
      </div>
    </Router>
  );
}

export default App;
