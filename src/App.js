import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MembershipForm from './page/MembershipForm';
import MyComponent from './page/Home';
import MembershipForm2 from './page/Lifemembership';
import Letter from './page/Letter';
import Login from './page/Login';
import Signup from './page/Signup';
import MembersPage from './page/Members';
import UserProfile from './page/User';
import NotFound from './page/NotFound';
import PaymentPage from './page/Paymentpage';
import EventPage from './page/Event';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyComponent />} />
        <Route path="/membership" element={<MembershipForm />} />
        <Route path='/membership2' element={<MembershipForm2 />} />
        <Route path='/letter' element={<Letter />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/Members' element={< MembersPage />} />
        <Route path='/User' element={< UserProfile />} />
        <Route path='/Notfound' element={< NotFound />} />
        <Route path='/payment' element={< PaymentPage />} />
        <Route path='/events' element={ < EventPage /> } />
      </Routes>
    </Router>
  );
}

export default App;
