import './App.css';
import Header from './Header.jsx'
import Footer from './Footer';
import Home from './Home';
import Issue from './Issue';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Routes>
            
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/Issue' element={<Issue Book/>}/>
          </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
