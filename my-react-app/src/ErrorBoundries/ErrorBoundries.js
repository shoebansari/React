import { Component } from "react";

class ErrorBound extends Component {
    ////////////////////////////////////////////////////////////////////////////////////
    //https://www.youtube.com/watch?v=cRIFppRVpUQ
  //Error boundries cann't handle asyncrounous code, server side rendering, event handlers
  constructor() {
    super();
    this.state = {
      error: null,
    };
  }
  // static getDerivedStateFromError() {
  //   return { error: true };
  // }
  componentDidCatch(){
    this.setState({hasError:true})
  }
  render() {
    return (
      <div>
        {this.state.error ? (
          <h1>custome page for error handling </h1>
        ) : (
          this.props.children
        )}
      </div>
    );
  }
}

export default ErrorBound;
