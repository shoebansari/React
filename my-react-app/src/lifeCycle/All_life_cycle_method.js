//https://www.youtube.com/watch?v=kVyrzn29QPk
import { Component } from "react";

import Child from "./Child";

class LifeCycleMethod extends Component {
  //state={name:'ansari'} // we can define state here as well , but will be overright by constructor state.
  constructor() {
    super(); // without super() will through error
    console.log("constructor"); // will only be run at first time
    this.state = {
      name: "shoeb",
    };
  }

  //2
  // this will run after constructor only once. here component have not rendered, state could be set here
  // operation on window or documents can be performed here.
  componentWillMount() {
    if (window.innerWidth <= 1800) {
      this.setState({ innerWidth: window.innerWidth });
      console.log("componentWillMount");
    }
  }

  //4-It render after the render() method. only once it will render.
  // best place to make ajax call.
  //if we have child component in this component that will render first(constructor of child, componentWillmount of child, render of child componentDidMount of child)
  // then after that this method will render
  componentDidMount() {
    console.log("componentDidMount");
  }

  //5-if there is any change in component or it recieve props from parent then this will render,
  //after that render method will render
  // react 16.3 introduced a new lifecycle method getDerivedStateFromProps replaced componentWillReceiveProps which is unsafe for asynch
  //rendering when misused this is no longer supported in react 17, instead UNSAFE_componentWillReceiveProps is used.
  componentWillReceiveProps() {
    console.log("componentWillReceiveProps");
  }

  //6- it is upto the based on condition, when we want to render the component,
  // it will return either true or false.
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  //7-it will run after shouldComponentUpdate
  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  //8-it will run after componentWillUpdate
  componentDidUpdate(previousProp, previousState) {
    console.log("componentDidUpdate");
  }

  //9- to cleanup
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  changeState() {
    this.setState({ name: "HHHH" });
  }

  unmount() {
    this.setState({ name: "unmount" });
  }
  //3- this will render after contructor and componentWillMount
  render() {
    console.log("render");

    if (this.state.name === "unmount") {
      return <div />;
    } else {
      return (
        <div>
          All life cycle methods name: {this.state.name}
          innerWidth: {this.state.innerWidth}
          child Name: <Child name={this.state.name} />
          <button onClick={this.changeState.bind(this)}>change State</button>
          <button onClick={this.unmount.bind(this)}>Unmount State</button>
        </div>
      );
    }
  }
}

export default LifeCycleMethod;
