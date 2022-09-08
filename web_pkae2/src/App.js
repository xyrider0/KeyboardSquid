import Footer from './components/Footer/Footer';
import Intro from './components/Intro';
import Carousel from './components/Carousel/Carousel';
import style from './style.module.css';

function App() {
  return (
    <div className="App">
      <Carousel></Carousel>
      <Intro></Intro>
      <Footer></Footer>
    </div>
  );
}

export default App;
