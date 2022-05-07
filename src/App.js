import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Pages/Blog/Blog';
import CategoryDetail from './Pages/CategoryDetail/CategoryDetail';
import CheckOut from './Pages/CheckOut/CheckOut/CheckOut';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Title from './Pages/Title/Title';
import Header from './Pages/Shared/Header/Header';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import AddCategory from './Pages/AddCategory/AddCategory';
import NotFound from './Pages/Shared/NotFound/NotFound';
import ManageCategories from './Pages/ManageCategories/ManageCategories';
import { ToastContainer } from 'react-toastify';
import MyItem from './Pages/MyItem/MyItem';


function App() {
  return (
    <div className='font-style'>
      <Title></Title>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/category/:categoryId' element={
          <RequireAuth>
            <CategoryDetail></CategoryDetail>
          </RequireAuth>
        }></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/checkout/:categoryId' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path='/addcategory' element={<AddCategory></AddCategory>}></Route>
        <Route path='/manage' element={
          <RequireAuth>
            <ManageCategories></ManageCategories>
          </RequireAuth>
        }></Route>
        <Route path='/myitem' element={
          <RequireAuth>
            <MyItem></MyItem>
          </RequireAuth>
        }></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
