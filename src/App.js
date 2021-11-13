import AllUsers from './Component/AllUsers/AllUsers';
import AddUser from './Component/AddUser/AddUser';
import EditUser from './Component/EditUser/EditUser';
import NavBar from './Component/NavBar/NavBar';
import NotFound from './Component/NotFound/NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={AllUsers} />
        <Route exact path="/add" component={AddUser} />
        <Route exact path="/edit/:id" component={EditUser} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
