import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Kontak from './Pages/Kontak';
import Portofolio from './Pages/Portofolio';
import DetailPortofolio from './Pages/Detail.Portofolio';

function App() {
  return (
    <div>
        <Router>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/kontak" element={<Kontak/>} />
              <Route path="portofolio" element={<Portofolio/>}/>
              <Route path="/porto/:slug" element={<DetailPortofolio/>} />
       
            </Routes>
        </Router>  
    </div>
  );
}

export default App;
