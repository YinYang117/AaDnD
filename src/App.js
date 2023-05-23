import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './LandingPage';


function App() {
  return (
    <Router>
      <Route exact path="/" component={LandingPage} />
      {/* Add other routes for different pages here */}
    </Router>
  );
}

export default App;