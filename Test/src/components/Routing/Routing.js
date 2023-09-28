import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ControlledComponent from '../ControlledUncontrolled/ControlledComponent'
import UnControlledComponent from '../ControlledUncontrolled/UnControlledComponent'
import User from '../ErrorBoundries/User'
import ErrorBoundries from '../ErrorBoundries/ErrorBoundries'
import Header from './Header'

const Routing = () => {
    return (<div>
              <ErrorBoundries><User error='Error12' /></ErrorBoundries>
        <Router>
            <Header/>
            {/*Nested Routing is when all other component are within single component,
            Exact Means- indicates that a route should only match an exact URL
            https://www.youtube.com/watch?v=RMcl2TzQ0MI&list=PLwGdqUZWnOp1bMwGTJVaQmdwbmX61iceM&index=6
            */}
            <Routes>
                <Route path='/'></Route>
                    <Route path='/ControlledComponent' element={<ControlledComponent />}></Route>
                    <Route path='/UnControlledComponent' element={<UnControlledComponent />}></Route>
                    <Route path='/User' element={<User />}></Route>

            </Routes>
        </Router>
    </div>)
}


export default Routing; 