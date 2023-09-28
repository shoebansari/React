import PreventRerender from './components/PreventRerender/PreventRerender'
import Form from './components/FormValidation/FormValidation'
import Portal from './components/ReactPortals/Portal'
import CheckComponent from './components/renderTwiceComponent/CheckComponent'
import Routing from './components/Routing/Routing'
import { lazy, Suspense, useState } from 'react'
const MyComponent = lazy(() => import('./components/ReactPerformace/MyComponent'))
const Home = lazy(() => import('./components/LazyLoad/Home'))
const About = lazy(() => import('./components/LazyLoad/About'))


function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <div>
        {/* Lazy Loading */}
        <Suspense fallback={<div>Please wait...</div>}>
          <Home />
          <About />
        </Suspense>
      </div>
      <hr />
      {/* see on the bottom on browser */}
      <Portal />
      <hr />
      <PreventRerender />
      <hr />
      {/* Form Validation */}
      {/* <Form /> */}
      <hr />
      {/* React Performance */}
      <Suspense fallback={<div>LOADING.......</div>}>
        <MyComponent count={count} />
      </Suspense>
      <button onClick={() => setCount(count + 1)}>Increament</button>
      <hr />
       {/* Check Why component re-renders twice */}
      <CheckComponent/>
      <hr/>
      <Routing/>
    </div>
  );
}

export default App;
