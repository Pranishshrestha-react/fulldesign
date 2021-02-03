import { BrowserRouter , Route , Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Posts from './pages/posts';
import Users from './pages/users';
import User from './pages/users/user.js';
import Albums from './pages/album';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path ="/posts" component={Posts} />
      <Route exact path ="/users" component={Users} />
      <Route exact path ="/users/:id" component={User} />
      <Route exact path ="/albums" component={Albums} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
