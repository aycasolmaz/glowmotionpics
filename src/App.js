import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from '../src/components/Navbar';
import AnimationScreen from '../src/views/AnimationScreen';
import Home from '../src/views/Home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AnimationScreen />} />
        <Route path="/home" element={<PageLayout><Home /></PageLayout>} />

      </Routes>
    </Router>
  );
}

function PageLayout({ children }) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}

export default App;
