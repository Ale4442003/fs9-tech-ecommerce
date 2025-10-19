import { Route, Routes } from 'react-router-dom';

import PublicLayout from './Layouts/PublicLayout';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Categories from './pages/Categories';
import Search from './pages/Search';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route path="" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="categories" element={<Categories />} />
          <Route path="search" element={<Search />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;