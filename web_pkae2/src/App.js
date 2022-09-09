import Footer from './components/Footer/Footer';
import Intro from './components/Intro';
import Header from './components/Header';
import Carousel from './components/Carousel/Carousel';
import style from './style.module.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Carousel></Carousel>
      <Intro></Intro>
      <Footer></Footer>
    </div>
  );
}

export default App;
