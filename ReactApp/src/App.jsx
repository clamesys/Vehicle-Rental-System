 
import { createBrowserRouter, Outlet, RouterProvider, Route,Navigate} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Help from "./pages/Help";
import Browse from "./pages/Browse";
import Register from "./pages/Register"; 
import MyFooter from "./components/footer";
import Navbar from "./components/Navbar"; 
import { AuthContext } from "./context/authContext"
import { useContext } from "react";

function App() {

  const currentUser = useContext(AuthContext).currentUser;
  const Layout = () => {
    return (
      <div >
      <Navbar/>
      <Outlet />  
      <MyFooter />
      </div>
    )
  };
  const ProtectedRoutes = ({children}) => {  
    if(!currentUser ) {
    return <Navigate to="/login" />;
    }
    console.log("currentUser", currentUser.data);
      return children;
  } 

  const router = createBrowserRouter([
    {
      path: '/',
      element: <ProtectedRoutes> <Layout/> </ProtectedRoutes>,
      children: [ 
        { path: '/', element: <Home /> },
        { path: '/profile/:id', element: <Profile /> },
        { path: '/browse', element: <Browse /> },
        { path: '/help', element: <Help /> }
      ]
    },
    {path: '/login', element: <Login />},
    {path: '/register', element: <Register />},
    {path: '/*', element: <NotFound />}
  ]);
  return (
      <div className="App">
        <RouterProvider router={router} />
      </div>
  );
}

export default App;