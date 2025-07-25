import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'; // Importing necessary components from 'react-router-dom' for routing.
import { useNavigate } from 'react-router-dom';

import Login from './views/auth/login'; // Importing the 'Login' component.
import Register from './views/auth/Register';
import Dashboard from './views/auth/Dashboard';
import Logout from './views/auth/logout';
import ForgotPassword from './views/auth/ForgotPassword';
import CreatePassword from './views/auth/CreatePassword';
import { SignupForm } from './views/auth/signup';
import MainLayout from './layouts/MainLayout';
import MyLogin from './layouts/Login';
import Content from './layouts/Content';
import Video from './layouts/Video';
import Inbox from './layouts/Inbox';
import Setting from './layouts/Setting';
import MyRegister from './layouts/Register';
import MainLogin from './layouts/MainLogin';
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          
          <Route path="/videos" element={<Video />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignupForm />} />
          <Route path='/register' element={<Register />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/mydash' element={<Dashboard />} />
          <Route path='/inbox' element={<Inbox />} />
          <Route path='/settings' element={<Setting />} />
          
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/create-new-password' element={<CreatePassword />} />
        </Route>
        <Route path="/" element={<MainLogin />}>
          <Route path="/mylogin" element={<MyLogin />} />
          <Route path='/myregister' element={<MyRegister />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
