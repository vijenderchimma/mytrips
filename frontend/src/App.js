import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './components/Home'
import LogIn from './components/LogIn'
import Register from './components/Register'
import Temples from './components/Temples'
import Waterfalls from './components/WaterFalls'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path = "/" Component={Home} />
      <Route exact path = "/login" Component={LogIn} />
      <Route exact path = "/register" Component={Register} />
      <Route exact path = "/temples" Component={Temples} />
      <Route exact path = "/waterfalls" Component = {Waterfalls} />
    </Routes>
  </BrowserRouter>
)

export default App