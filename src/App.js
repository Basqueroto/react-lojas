import logo from './logo.svg';
import './App.css';
import Header from "./componentes/Header";
import Banner from "./componentes/Banner";
import Card from "./componentes/Card";
import Carder from "./componentes/Carder";
import Footer from "./componentes/Footer";

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Banner></Banner>
        <Carder title='Os mais vendidos'></Carder>
        <Footer></Footer>
    </div>
  );
}

export default App;
