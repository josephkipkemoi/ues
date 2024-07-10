import './App.css';
import Header from './components/header/header';
import SearchComponent from './components/search/search';
import ServiceComponent from './components/services/service';

function App() {
  return (
    <div >
      <Header/>
      <SearchComponent/>
      <ServiceComponent/>
    </div>
  );
}

export default App;
