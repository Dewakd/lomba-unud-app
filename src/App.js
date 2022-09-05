import './App.css';
import { Navbar, Footer } from './components'
import { About, Contribution, Header, Newsletter, Reasons, TakeAction, WhyUs } from './landing-page'

function App() {
  return (
    <div className="App">
      <div className='header-bg'>
        <Navbar/>
        <Header/>
        <About/>
      </div>
      
    </div>
  );
}

export default App;
