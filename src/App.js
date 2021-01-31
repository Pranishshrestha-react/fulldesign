import { BrowserRouter , Route , Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Posts from './pages/posts';
import Users from './pages/users';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path ="/posts" component={Posts} />
      <Route exact path ="/users" component={Users} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
