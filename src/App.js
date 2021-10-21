import About from "./Component/About/About";
import Home from "./Component/Home/Home";
import Contact from "./Component/Contact/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Booking from "./Component/Booking/Booking/Booking";
import Login from "./Component/Login/Login/Login";
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./Component/Login/PrivateRoute/PrivateRoute";
import NotFound from "./Component/NotFound/NotFound";
import Register from "./Component/Register/Register";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>

            <PrivateRoute path="/about">
              <About></About>
            </PrivateRoute>

            <PrivateRoute path="/booking/:id">
              <Booking></Booking>
            </PrivateRoute>

            <PrivateRoute path="/contact">
              <Contact></Contact>
            </PrivateRoute>

            
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
