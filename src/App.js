import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

import Login from './pages/login/Login'
import Project from './pages/project/Project'
import Create from './pages/create/Create'
import Signup from './pages/signup/Signup'
import Dashboard from './pages/dashboard/Dashboard'
import Navbar from './components/Navbar'
import OnlineUsers from './components/OnlineUsers'

import './App.css'
import Sidebar from './components/Sidebar'
function App() {
  document.title = "Project Management Site";
  const { authIsReady, user } = useAuthContext()
  return (
    <div className="App">
      {authIsReady &&
        <BrowserRouter>
          {user && <Sidebar />}
          <div className="container">
            <Navbar />
            <Switch>
              <Route exact path="/">
                {!user && <Redirect to="/login" />}
                {user && <Dashboard />}
              </Route>
              <Route path="/create">
                {!user && <Redirect to="/login" />}
                {user && <Create />}
              </Route>
              <Route path="/projects/:id">
                {!user && <Redirect to="/login" />}
                {user && <Project />}
              </Route>
              <Route path="/login">
                {user && <Redirect to="/" />}
                {!user && <Login />}
              </Route>
              <Route path="/signup">
                {user && <Redirect to="/" />}
                {!user && <Signup />}
              </Route>
            </Switch>
          </div>
          {user && <OnlineUsers />}
        </BrowserRouter>
      }
    </div>
  );
}

export default App
