import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  console.log('안녕하세요!!! 🔥');
  
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
