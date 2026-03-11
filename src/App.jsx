import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

import MenteeProfilePage from './pages/MenteeProfilePage';

import UsersPage from './pages/UsersPage';
import UserProfilePage from './pages/UserProfilePage';
import UserEditPage from './pages/UserEditPage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/mentee/profile" element={<MenteeProfilePage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/users/:id" element={<UserProfilePage />} />
      <Route path="/users/:id/edit" element={<UserEditPage />} />
    </Routes>
  );
}

export default App;