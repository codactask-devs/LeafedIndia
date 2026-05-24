import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import HomePage from './pages/LandingPage/HomePage';
import Footer from './shared/Footer';
import './App.css';

const Editor = lazy(() => import('./studio/pages/Editor'));

const Loader: React.FC = () => (
  <div className="flex items-center justify-center h-screen bg-[#fdfae9]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0d6e41]"></div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <HomePage />
            <Footer />
          </>
        } />
        <Route path="/studio" element={
          <Suspense fallback={<Loader />}>
            <Editor />
          </Suspense>
        } />
      </Routes>
    </Router>
  );
}

export default App;
