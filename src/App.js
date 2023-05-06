import './App.css';
import Header from './Header.jsx'
import Search from './Search';
import Cards from './Cards';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
    <Header />
    <Search />
    <Cards />
    <Footer />
    </div>
  );
}

export default App;
