// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import SimpleNotes from './components/SimpleNotes';
import Todo from './components/Todo';
import Pomodoro from './components/Pomodoro';
import Coins from './components/Coins';
import Notes from './components/Notes';
import Login from './components/Login/Login';
import Chart from './components/Chart';
import Animation from './components/Animation';
import FormWithList from './components/Form';
import Numbers from './components/Numbers';
import Xss from './components/Xss';
import Calculator from './components/Calculator';
import Person from './components/Person';
import CryptoCoins from './components/CryptoCoins'
import Error404 from './components/Error/404';

const AppRoutes = () => (
      <App>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/simpleNotes" component={SimpleNotes} exact />
          <Route path="/simpleNotes/:noteId" component={SimpleNotes} exact />
          <Route path="/Todo" component={Todo} exact />
          <Route path="/Pomodoro" component={Pomodoro} exact />
          <Route path="/Coins" component={Coins} exact />
          <Route path="/Notes" component={Notes} exact />
          <Route path="/Login" component={Login} exact />
          <Route path="/Chart" component={Chart} exact />
          <Route path="/Animation" component={Animation} exact />
          <Route path="/FormWithList" component={FormWithList} exact />
          <Route path="/Numbers" component={Numbers} exact />
          <Route path="/Xss" component={Xss} exact />
          <Route path="/Calculator" component={Calculator} exact />
          <Route path="/Person" component={Person} exact />
          <Route path="/CryptoCoins" component={CryptoCoins} exact />
          <Route component={Error404} />
        </Switch>
      </App>
    );
export default AppRoutes;
