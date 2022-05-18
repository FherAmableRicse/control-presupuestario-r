import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const company = {
    name: '💸Control Presupuestario💸',
    slogan: 'Tu dinero es nuestra preocupacion'
  };
  const currenDateYear = new Date().getFullYear();
  const author = 'Fher Amable Ricse';

  console.log(currenDateYear)
  console.log(author)
  return (
    <>
      <Header
        company={company}
      />
      <img src={logo} className="App-logo" alt="logo" />
      <Footer
        currenDateYear={currenDateYear}
        author={author}
      />
    </>
  );
}

export default App;