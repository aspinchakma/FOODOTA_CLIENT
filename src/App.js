import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './pages/Common/Footer/Footer';
import Header from './pages/Common/Header/Header';
import Details from './pages/Details/Details';
import MainHome from './pages/Home/MainHome/MainHome';
import Login from './pages/Login/Login';
import ManageAllOrder from './pages/ManageAllOrder/ManageAllOrder';
import MyOrder from './pages/MyOrder/MyOrder';
import NotFound from './pages/NotFound/NotFound'
import AuthProvider from './utilities/ContexApi/AuthProvider';
import PrivateRoute from './utilities/firebase/PrivateRoute/PrivateRoute';
function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <MainHome></MainHome>
            </Route>
            <Route path="/home">
              <MainHome></MainHome>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/myOrder">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute path="/manageAllOrder">
              <ManageAllOrder></ManageAllOrder>
            </PrivateRoute>
            <PrivateRoute path="/food/details/:foodId">
              <Details></Details>
            </PrivateRoute >
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
