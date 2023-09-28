import { Component } from "react";

class Child extends Component {

  constructor(){
    super()
    console.log('constructor child');
  }

  componentWillMount() {
    console.log('componentWillMount child');
    
  }

  componentWillReceiveProps(){
    console.log('componentWillReceiveProps child');
  }  

  render() {
    console.log("render child");

    return (
      <div>
        Child: {this.props.name}
      </div>
    );
  }
}

export default Child;
