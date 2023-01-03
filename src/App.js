import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Login } from './pages/login/Login'
import { Project } from './pages/project/Project'
import { Create } from './pages/create/Create'
import { Signup } from './pages/signup/Signup'
import { Dashboard } from './pages/dashboard/Dashboard'
import Navbar from './components/Navbar'

import './App.css'
import Sidebar from './components/Sidebar'
function App() {
  document.title = "Prject Management Site";
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <div className='container' >
          <Navbar />
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/project/:id">
              <Project />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/" exact>
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App
