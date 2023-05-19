import './App.css';
import Header from './Header.jsx'
import Footer from './Footer';
import Home from './Home';
import Issue from './Issue';
import Mission from './Mission';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <Router >
        <Header />
          <Routes>
            
            <Route exact path='/' element={<Home/>}/>
            <Route path='/Issue' element={<Issue Book/>}/>
            <Route path='/Mission' element={<Mission/>}/>
            <Route path='/Login' element={<Login />}/>
          </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
