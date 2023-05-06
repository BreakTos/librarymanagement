import './App.css';
import Header from './Header.jsx'
import Search from './Search';
import Cards from './Cards';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
    <Header />
    <Search />
    <Cards />
    </div>
  );
}

export default App;
