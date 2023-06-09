import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Restlist from './component/Restlist';
import Viewrest from './component/Viewrest';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom' 
function App() {
  return (
    <div className="App">
      <>
      <header className="App-header">
          <Header/>
          </header>
          <Routes>
            <Route path='/'element={<Restlist/>}/>
            <Route path='/viewrest/:id'element={<Viewrest/>}/>
          
          </Routes>


          <Footer/>
      </>
    </div>
  );
}

export default App;
