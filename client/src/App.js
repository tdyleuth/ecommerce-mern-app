import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Components
import NavBar from './components/Navbar';

//Screens
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
    return (
        <Router>
            <NavBar />
            {/* SideDrawer */}
            {/*Backdrop */}
            <main>
                <Switch>
                    <Route exact path='/' component={HomeScreen} />
                    <Route
                        exact
                        path='/product/:id'
                        component={ProductScreen}
                    />
                    <Route exact path='/cart' component={CartScreen} />
                </Switch>
            </main>
        </Router>
    );
}

export default App;
