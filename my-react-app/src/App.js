import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import AboutUs from './AboutUs'
import AboutUs2 from './AboutUs2'
import LifeCycle from './lifeCycle/All_life_cycle_method'
import Uncontrolled from './Controlled_Uncontrolled/Uncontrolled'
import User from './ErrorBoundries/User'
import ErrorBound from './ErrorBoundries/ErrorBoundries'
import PreventRerender from './PreventRerender/PreventRerender'

import {memo} from 'react'

function App() {
  
  ////////////////////////////////////////////////////////////////////////////////////
  //Using memo will cause React to skip the rendering a component if its props have not changed.

  

  return (
    <>  
    <div>
      <PreventRerender/>
    </div>
    <div>
      <h1>Error Boundries in React</h1>
      <ErrorBound><User/></ErrorBound>
    </div>
    <Router>
       <div>
        <nav>
          <ul>
            <li>
              <Link to="/App">Home</Link>
            </li>
            <li>
              <Link to="/AboutUs">About</Link>
            </li>
            <li>
              <Link to="/AboutUs2">About Us 2</Link>
            </li>
            <li>
              <Link to="/lifeCycle">Life Cycle Method</Link>
            </li>
            <li>
              <Link to="/Uncontrolled">Uncoltrolled Component</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/AboutUs' element={<AboutUs/>}>
          </Route>
          <Route path="/AboutUs2" element={<AboutUs2/>}>
          </Route>
          <Route path="/LifeCycle" element={<LifeCycle/>}>
          </Route>
          <Route path="/Uncontrolled" element={<Uncontrolled/>}>
          </Route>
          <Route path="/App">
          </Route>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default memo(App);
