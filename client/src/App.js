import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Appointment from './components/Appointment/Appointment/Appointment';
import Home from './components/Home/Home/Home';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/appointment">
                    <Appointment />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
