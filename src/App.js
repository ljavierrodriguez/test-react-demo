import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import injectContext from './store/appContext';

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default injectContext(App);
