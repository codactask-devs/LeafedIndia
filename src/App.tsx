import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/LandingPage/HomePage';
import Footer from './shared/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <HomePage />
      <Footer />
    </Router>
  );
}

export default App;
