import { createBrowserRouter, RouterProvider,Route } from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';  
import Write from './Pages/Write';  
import Register from './Pages/Register';  
import Single from './Pages/Single';  
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Outlet } from "react-router";
import './style.css';
import './style2.css';

function Layout(){
  return(
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/post/:id",
        element:<Single/>
      },
      {
        path:"/Write",
        element:<Write/>
      }
    ]
  },
  {
    path:"/Register",
    element: <Register/>
  },
  {
    path:"/Login",
    element: <Login/>
  },
  {
    path:"/Write",
    element: <Write/>
  },
  {
    path:"/path/:id",
    element: <Single/>
  },
 
]);


function App() {
  return(
    <div className="app">
      <div className="container">
       <RouterProvider router={router}></RouterProvider>
      </div>
      
    </div>
    
  )
}
export default App;