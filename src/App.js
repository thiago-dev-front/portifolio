import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home';
import Contato from './pages/Contato';

function App() {
  return (
    <div className='container xl:max-w-[1193px] mx-auto'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='contato' element={<Contato />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
