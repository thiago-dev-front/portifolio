import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Projects from './components/Projects';
import Stacks from './components/Stacks';

function App() {
  return (
    <div className='container xl:max-w-[1193px] mx-auto'>
      <Menu />
      <Banner />
      <Stacks />
      <Projects />
      <Footer />
    </div>

  );
}

export default App;
