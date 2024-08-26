
import './App.css';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Sidebar/>
      <Main/>
      <Footer/>
    </div>

  );
}

export default App;
