import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import NavBar from './components/Navbar';
import LandingPage from './Components/LandingPage';

function App() {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Switch>
        <Route exact={true} path="/" >
          <LandingPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;