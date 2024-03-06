import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MembershipForm from './page/MembershipForm';
import MyComponent from './page/Home';
import MembershipForm2 from './page/Lifemembership';
import Letter from './page/Letter';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyComponent />} />
        <Route path="/membership" element={<MembershipForm />} />
        <Route path='/membership2' element={<MembershipForm2 />} />
        <Route path='/letter' element={<Letter />} />
      </Routes>
    </Router>
  );
}

export default App;
