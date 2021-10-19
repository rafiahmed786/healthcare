import './App.css';
import Header from "./Pages/Shared/Header/Header"
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login/Login'
import Register from './Pages/Login/Register/Register';
import Authprovider from './Pages/Contexts/Authprovider';
import AllServices from './Pages/AllServices/AllServices';
import AllDoctors from './Pages/AllDoctors/AllDoctors';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
function App() {
 
  return (
    <div className="App">
      
      <Authprovider>
        
      <BrowserRouter>
      <Header></Header>
      <Switch>
        
        <Route exact path="/">
          <Home></Home>
        </Route>
        <PrivateRoute path='/services'>
          <AllServices></AllServices>
        </PrivateRoute>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <PrivateRoute path='/doctors'>
         <AllDoctors></AllDoctors>
        </PrivateRoute>
        <Route path='/register'>
          <Register></Register>
        </Route>
        <Route path="/signin">
          <Login></Login>
        </Route>
        <PrivateRoute path='/serviceDetails/:serviceID'>
            <ServiceDetail></ServiceDetail>
        </PrivateRoute>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      </Authprovider>
    </div>
  );
}

export default App;
